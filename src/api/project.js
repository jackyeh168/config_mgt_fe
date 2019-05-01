import request from '@/api/request'

// export function fetchList(query) {

//   return request({
//     url: '/article/list',
//     method: 'get',
//     params: query
//   })

export function getProject () {
  return request({
    url: '/projects',
    method: 'get'
  })
}
