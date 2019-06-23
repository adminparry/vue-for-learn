import { routers } from '@/routers'

// 初始化获取角色为menu的作为菜单的初始state
const state = {
    routes: routers.filter(item => item.use == 'menu').sort((a, b) => {
        return a.order - b.order
    }),

}
// 根据登录返回的菜单权限过滤出该角色拥有的菜单
const actions = {
    generateRoute({ commit }, roles) {
        commit('GET_OWN_MENU', roles)
    }
}
const deepCheckPermission = (routers, permissions) => {
    const ret =  routers.filter(item => {
        if(item.children)item.children = deepCheckPermission(item.children, permissions);

        return permissions.includes(item.permission);
    })
    return ret;
}
const mutations = {
    GET_OWN_MENU: (state, arr) => {
        if(arr == null){
            state.routes = [];
            return;
        }
        state.routes = deepCheckPermission(state.routes, arr);
        
        // state.routes = state.routes.filter((item) => {
        //     if(item.children){

        //     }
        //     return arr.includes(item.permission)    
        // });

    }
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