/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'

/**
 * 登录注册
 */
export const hanldeLoginApi = (data) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}

/**
 * 发送手机验证码
 */
export const handleSendMobileMessageApi = (data) => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${data}`
  })
}

/**
 * 获取用户自己的信息
 */

export const userInfoApi = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
  })
}

/**
 * 获取用户首页头部标签内容
 */

export const getUserTabsListApi = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}

/**
 *
 * 获取所有的频道
 */

export const getAllChannelsApi = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/channels'
  })
}
