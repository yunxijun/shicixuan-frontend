import request from '../utils/request'

export const getTangshiArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/tangshi',
    params
  })
}
