export default {
    path: '/apollo',
    name: 'apollo',
    meta: {
        title: '阿波罗'
    },
    component: () => import(/* webpackChunkName: "apollo" */ '@/views/Apollo.vue')

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   
}