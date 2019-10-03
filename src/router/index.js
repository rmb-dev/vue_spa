import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Bikes from '@/components/Items/Bikes'
import Parts from '@/components/Items/Parts'
import Gear from '@/components/Items/Gear'
import Places from '@/components/Items/Places'
import Login from '@/components/Auth/Login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/bikes/:id',
      name: 'bikes',
      component: Bikes
    },
    {
      path: '/parts',
      name: 'parts',
      component: Parts
    },
    {
      path: '/gear',
      name: 'gear',
      component: Gear
    },
    {
      path: '/places',
      name: 'places',
      component: Places
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: 'history'
})
