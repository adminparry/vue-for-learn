# vuex

Vuex是一个专门为Vue.js应用程序开发的状态管理模式, 它采用集中式存储管理所有组件的公共状态, 并以相应的规则保证状态以一种可预测的方式发生变化.

[![core](./vuex_pic.png "vuex")](https://vuex.vuejs.org/)

### store.js

``` javascript
import Vue from 'vue'
import Vuex from 'vuex'
import { stores , getters } from '@/stores'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: stores,
  getters,
})
<!-- 可选参数 使用modules为命名模式: 可以在进行创建 storeOptions -->
export interface StoreOptions<S> {
  state?: S | (() => S);
  getters?: GetterTree<S, S>;
  actions?: ActionTree<S, S>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<S>;
  plugins?: Plugin<S>[];
  strict?: boolean;
}
```

### stores/index.js

``` javascript
<!-- 获取导入modules下所有js文件 -->
const modulesFiles = require.context('./modules', true, /\.js$/)
const json = {};

export const stores = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  <!-- 合并所有需要的getter -->
  Object.assign(json,value['getter']);

  modules[moduleName] = value[moduleName] || value.default
  return modules
}, {})

export const getters = json

```

### stores/modules/app.js
``` javascript
const state = { 
    sidebar: {
        opened: localStorage.getItem('sidebarStatus') ? localStorage.getItem('sidebarStatus')  : true,

    },
    device: 'desktop',
    size: localStorage.getItem('size') || 'Medium'
}
const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebar.opened = !state.sidebar.opened;

    },
    SET_SIZE: (state, size) => {
        state.size = size;
        localStorage.setItem('size', size);
    }
}
const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    setSize({ commit }, size){
        commit('SET_SIZE', size)
    }
}
<!-- 简化命名给顶层 -->
export const getter = {
    slidebar: state => state.app.slidebar,
    size: state => state.app.size,
    device: state => state.app.device,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
```
#### 在vue实例中操作store
``` javascript
export default {
	computed: {
		size: {
			get() {
				return this.$store.getters.size;
			},
			set(val) {
				this.$store.state.app.size = val;
			}
		}
	}
}
```

