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

/**
 * 新增用户频道
 *
 */

export const addUserChannelApi = data => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/channels',
    data
  })
}

/**
 * 删除指定的频道
 */
export const deleteUserChannelApi = data => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/channels/${data}`
  })
}

/**
 * 关注用户
 */
export const followAutorApi = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/user/followings',
    data
  })
}

/**
 * 取消关注用户
 */

export const cancelFollowAutorApi = target => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/followings/${target}`
  })
}

/**
 * 获取用户个人信息
 */
export const getUserProfitApi = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/profile'
  })
}

/**
 * 编辑个人信息
 */

export const editUserProfitApi = (q) => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/profile',
    data: q
  })
}
