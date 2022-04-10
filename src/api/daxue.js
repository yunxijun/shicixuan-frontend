import request from '../utils/request'

export const getDaxueArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/daxue',
    params
  })
}
