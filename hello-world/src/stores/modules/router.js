import { routers } from '@/routers'


const state = {
    routes: routers,

}
const actions = {
    generateRoute({ commit }, roles) {
        
    }
}
const mutations = {

}
export const getter = {
    routes: state => state.router.routes
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
}