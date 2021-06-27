// 非组件模块中获取store
import store from '../store/index'

import JSONbig from 'json-bigint'

import { Toast } from 'vant'
/**
 * 请求模块
 */

import axios from 'axios'
import Router from '@/router'

// 通过refresh_token获取新的token 重新创建一个axios实例  这样就不会走request的拦截器
const refreshTokenReq = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/',
  // 定义后端返回的原始数据的处理
  // 参数 data 就是后端返回的原始数据（未经处理的 JSON 格式字符串）
  transformResponse: [function (data) {
    // Do whatever you want to transform the data
    // console.log(data)

    // 后端返回的数据可能不是 JSON 格式字符串
    // 如果不是的话，那么 JSONbig.parse 调用就会报错
    // 所以我们使用 try-catch 来捕获异常，处理异常的发生
    try {
      // 如果转换成功，则直接把结果返回
      return JSONbig.parse(data)
    } catch (err) {
      console.log('转换失败', err)
      // 如果转换失败了，则进入这里
      // 我们在这里把数据原封不动的直接返回给请求使用
      return data
    }

    // axios 默认在内部使用 JSON.parse 来转换处理原始数据
    // return JSON.parse(data)
  }]
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // store的user中存放了token信息
  const { user } = store.state
  // 通过user判断用户是否登录
  if (user) {
    // 用户登录就给请求设置token头部信息
    config.headers.Authorization = `Bearer ${user.token}`
  }
  // 处理完之后一定要返回这个配置好的config
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use((response) => {
  // 响应成功进入这里
  return response
}, async (err) => {
  const status = err.response.status

  // store的user中存放了token信息
  const { user } = store.state

  if (status === 400) {
    // 客户端错误
    Toast.fail('客户端请求参数异常')
  } else if (status === 401) {
    // token 无效
    if (!user || !user.token) {
      // 没有登录 跳转到登录页面
      return redirectLogin()
    }
    // 使用refresh_token获取新的token
    try {
      const { data } = await refreshTokenReq({
        method: 'PUT',
        url: '/app/v1_0/authorizations',
        header: {
          Authorization: `Bearea ${user.refresh_token}`
        }
      })
      // 拿到新的token更新到容器中
      user.token = data.data.token
      store.commit('setUser', user)

      // 将发送失败的请求再次发送
      return request(err.config)
    } catch (err) {
      console.log('rerere')
      // 刷新token都失败了 直接跳转登录页
      redirectLogin()
    }
  } else if (status === 403) {
    // 没有权限
  } else if (status >= 500) {
    // 服务端错误
    Toast.fail('服务端异常 请稍后重试')
  }

  // 请求响应失败进入这里
  return Promise.reject(err)
})

function redirectLogin () {
  Router.replace({
    name: 'login',
    query: {
      // 跳转到登录页的时候将当前的路由地址作为参数传过去 这样登录成功后就可以判断是跳转到当前页面还是跳转到首页
      redirect: Router.history.current.fullPath
    }
  })
}

// 导出
export default request
