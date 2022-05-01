import request from '../utils/request'

export const getNantangArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/nantang',
    params
  })
}
