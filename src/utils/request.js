// 非组件模块中获取store
import store from '../store/index'

/**
 * 请求模块
 */

import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
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

// 导出
export default request
