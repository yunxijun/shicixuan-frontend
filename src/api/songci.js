import request from '../utils/request'

export const getSongciArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/songci',
    params
  })
}
