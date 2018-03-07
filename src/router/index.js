import Vue from 'vue'
import Router from 'vue-router'
import DefaultApp from '@/components/StarterTemplate'
import index from '@/components/Index'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode:'history', //go trga/#/ od url
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/StarterTemplate',
      name: 'StarterTemplate',
      component: DefaultApp
    }
  ]
})
