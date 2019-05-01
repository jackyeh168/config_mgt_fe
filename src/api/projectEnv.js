import request from '@/api/request'

export function getProjectEnv (projectId) {
  return request({
    url: '/project/' + projectId + '/envs',
    method: 'get'
  })
}

export function setProjectEnv (projectId, data) {
  return request({
    url: '/project/' + projectId + '/envs',
    method: 'post',
    data
  })
}
