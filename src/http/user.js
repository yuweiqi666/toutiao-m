/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'

/**
 * 登录注册
 */
export const hanldeLoginApi = (data) => {
  return request.post('/app/v1_0/authorizations', data)
}

export const handleSendMobileMessageApi = (data) => {
  return request.get(`/app/v1_0/sms/codes/${data}`)
}
