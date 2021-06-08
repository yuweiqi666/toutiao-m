import request from '@/utils/request'

/**
 * 获取文章列表
 */
export const getArticleListApi = (p) => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params: p
  })
}
