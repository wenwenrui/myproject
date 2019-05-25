import Vue from 'vue'
import Router from 'vue-router'
import { getLocalStorge } from '../utils/base'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import select from '@/pages/select'
import echart from '@/pages/echart'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/echart',
      name: 'echart',
      component: echart
    },
    {
      path: '/select',
      name: 'select',
      component: select
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to.path, from.path)
  if (to.path === '/login') {
    next()
  } else {
    const token = getLocalStorge({key: 'access-token'})
    if (!token) {
      next(`/login?from=${to.path}`)
    } else {
      next()
    }
  }
})
export default router
