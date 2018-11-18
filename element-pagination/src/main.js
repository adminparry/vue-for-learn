import Vue from 'vue'

import App from './component/pager.vue'
import 'element-theme-chalk/lib/pagination.css'
import 'element-theme-chalk/lib/icon.css'



new Vue({
	el:'#app',
  	components: { App },
  	template: '<App/>'
})