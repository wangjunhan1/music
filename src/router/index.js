import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Recommend from '@/pages/home/components/recommend'
import Singer from '@/pages/home/components/singer'
import Ranking from '@/pages/home/components/ranking'
import Search from '@/pages/home/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/recommend',
      children: [{
        path: 'recommend',
        name: 'recommend',
        component: Recommend
      }, {
        path: 'singer',
        name: 'singer',
        component: Singer
      }, {
        path: 'ranking',
        name: 'ranking',
        component: Ranking
      }, {
        path: 'search',
        name: 'search',
        component: Search
      }]
    }
  ]
})
