import request from '../utils/request'

export const getLunyuArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/lunyu',
    params
  })
}
