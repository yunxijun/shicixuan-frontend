import request from '../utils/request'

export const getCaocaoshijiArticle = () => {
  return request({
    method: 'GET',
    url: '/v1/caocaoshiji'
  })
}
