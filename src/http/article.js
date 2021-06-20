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

/**
 * 获取文章详情
 */
export const getArticleDetailApi = articleId => {
  return request({
    method: 'GET',
    url: `/app/v1_0/articles/${articleId}`
  })
}

/**
 * 对文章点赞
 */

export const addLikeApi = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/article/likings',
    data
  })
}

/**
 * 对文章不喜欢
 */

export const disLikeApi = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/article/dislikes',
    data
  })
}

/**
 * 收藏文章
 */
export const collectArticleApi = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/article/collections',
    data
  })
}

/**
 * 取消收藏文章
 */

export const cancelCollectArticleApi = target => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/article/collections/${target}`
  })
}

/**
 * 获取文章评论或评论回复
 */

export const getArticleRecommentsApi = data => {
  return request({
    method: 'GET',
    url: '/app/v1_0/comments',
    params: data
  })
}
