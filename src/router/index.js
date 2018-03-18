import Vue from 'vue'
import Router from 'vue-router'
import DefaultApp from '@/components/StarterTemplate'
import index from '@/components/Index'
import Login from '@/components/Login'

import iHome from '@/components/iHome'
import meetups from '@/components/Meetup/Meetups'
import Meetup from '@/components/Meetup/Meetup'
import createmeetup from '@/components/Meetup/createmeetup'
import profile from '@/components/User/profile'
import signup from '@/components/User/signup'
import signin from '@/components/User/signin'

Vue.use(Router)

export default new Router({
  mode:'history', //go trga/#/ od url
  routes: [
    {
      path: '/',
      name: 'iHome',
      component: iHome
    },
    {
      path: '/meetups',
      name: 'meetups',
      component: meetups
    },
    {
      path: '/meetup/new',
      name: '/createmeetup',
      component: createmeetup
    },
    {
      path: '/meetup/:id',
      name: 'Meetup',
      props:true,
      component: Meetup
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    }
  ]
})
