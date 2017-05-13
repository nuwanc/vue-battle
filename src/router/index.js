import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Popular from '@/components/Popular'
import Battle from '@/components/Battle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/popular',
      name: 'Popular',
      component: Popular
    },
    {
      path: '/battle',
      name : 'Battle',
      component: Battle
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
})
