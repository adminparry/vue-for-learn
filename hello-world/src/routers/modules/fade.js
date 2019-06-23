export default {
    path: 'fade',
    name: 'fade',
    permission: '8',
    meta: {
        title: 'element-fade',
        
    },
    icon: 'el-icon-s-promotion',
    component: () => import(/* webpackChunkName: "fade" */'@/views/fade.vue')
}