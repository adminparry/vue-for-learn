export default {
    path: '/fade',
    name: 'fade',
    meta: {
        title: 'element-fade'
    },
    component: () => import(/* webpackChunkName: "fade" */'@/views/fade.vue')
}