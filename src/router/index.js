import Vue from 'vue'
import Router from 'vue-router'
import DefaultApp from '@/components/DefaultApp'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/DefaultApp',
      name: 'DefaultApp',
      component: DefaultApp
    }
  ]
})
