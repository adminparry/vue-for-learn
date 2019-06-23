import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import { createProvider } from './vue-apollo'
import fetcher from './fetchers'

import '@/directives/permission';

console.log(store)
const context = {
  install: (Vue) => {
     Vue.prototype.$fetch = fetcher;
     Vue.prototype.$permission = function(code){
       return store.state.login.userInfo.permission.indexOf(code) > -1;
     };
  }
}
Vue.use(context);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // apolloProvider: createProvider(),
  context,
  render: h => h(App)
}).$mount('#app')
