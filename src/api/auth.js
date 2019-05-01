import request from '@/api/request'

// export function fetchList(query) {

//   return request({
//     url: '/article/list',
//     method: 'get',
//     params: query
//   })

export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
