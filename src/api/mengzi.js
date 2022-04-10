import request from '../utils/request'

export const getMengziArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/mengzi',
    params
  })
}
