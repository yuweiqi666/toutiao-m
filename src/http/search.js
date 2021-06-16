import request from '@/utils/request'

// 获取搜索建议
export const getResultSuggestionApi = data => {
  return request({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params: data
  })
}
