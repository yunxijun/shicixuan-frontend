import request from '../utils/request'

export const getChuciArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/chuci',
    params
  })
}
