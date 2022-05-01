import request from '../utils/request'

export const getHuajianjiArticle = (params) => {
  return request({
    method: 'GET',
    url: '/v1/huajianji',
    params
  })
}
