export default {
    path: '/permission',
    name: 'permission',
    component: () => import(/* webpackChunkName: "permission" */'@/views/Permission.vue'),
    meta: {
        title: '权限'
    }
}