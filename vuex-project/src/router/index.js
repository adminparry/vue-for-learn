import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/components/app'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'App',
      component: App
    },
    {
      path: '/b',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/c',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
