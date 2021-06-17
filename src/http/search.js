import request from '@/utils/request'

// 获取搜索建议
export const getResultSuggestionApi = data => {
  return request({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params: data
  })
}

// 获取搜索结果
export const getSearchResultApi = data => {
  return request({
    method: 'GET',
    url: '/app/v1_0/search',
    params: data
  })
}

// 获取搜索历史
export const getSearchHistoryApi = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/search/histories'
  })
}
