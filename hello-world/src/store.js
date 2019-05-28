import Vue from 'vue'
import Vuex from 'vuex'
import { stores , getters } from '@/stores'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: stores,
  getters,
})
