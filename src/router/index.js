import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import UserProject from '@/components/UserProject'
import ProjectEnv from '@/components/ProjectEnv'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/userproject',
      name: 'UserProject',
      component: UserProject
    },
    {
      path: '/projectenv',
      name: 'ProjectEnv',
      component: ProjectEnv
    }
  ]
})
