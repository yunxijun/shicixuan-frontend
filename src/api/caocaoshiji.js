import request from '../utils/request'

export const getCaocaoshijiArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/caocaoshiji',
    params
  })
}
