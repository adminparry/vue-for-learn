import Vue from 'vue'
import Router from 'vue-router'

import { routers } from '@/routers'
console.info(routers)
Vue.use(Router)

// expose Router Instance 
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y:0}),
  base: process.env.BASE_URL,
  routes: routers
})
