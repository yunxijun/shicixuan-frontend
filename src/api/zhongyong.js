import request from '../utils/request'

export const getZhongyongArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/zhongyong',
    params
  })
}
