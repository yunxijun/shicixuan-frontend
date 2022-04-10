import request from '../utils/request'

export const getShijingArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/shijing',
    params
  })
}
