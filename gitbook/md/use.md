# vue实例中添加方法

### use

``` javascript
import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import fetcher from './fetchers'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  fetcher,
  render: h => h(App)
}).$mount('#app')
```