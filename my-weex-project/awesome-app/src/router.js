/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Video from '@/components/Video'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
