import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Popular from '@/components/Popular'
import Battle from '@/components/Battle'
import Results from '@/components/Results'

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
    },
    {
      path: '/battle/results',
      name : 'Results',
      component : Results
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
})
