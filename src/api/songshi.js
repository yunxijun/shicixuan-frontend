import request from '../utils/request'

export const getSongshiArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/songshi',
    params
  })
}
