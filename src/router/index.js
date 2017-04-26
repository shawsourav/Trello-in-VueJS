import Vue from 'vue'
import Router from 'vue-router'
import BoardContainer from '@/components/BoardContainer'
import Newcard from '@/components/Newcard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: BoardContainer
    },
    {
      path: '/new',
      component: Newcard
    }
  ]
})
