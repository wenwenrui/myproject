import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import select from '@/pages/select'
import echart from '@/pages/echart'

Vue.use(Router)
console.log(echart)
export default new Router({
  routes: [
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
