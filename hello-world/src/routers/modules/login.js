export default {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'@/views/Login.vue'),
    meta: {
        title: '登录'
    }
}