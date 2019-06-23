import Static from '@/views/static/static.vue';

export default {
    path: '/static',
    name: 'static',
    meta: {
        title: 'status'
    },
    component: Static,
    children: [
        {
            path: '403',
            name: '403',
            meta: {
                title: '403'
            },
            component: () => import(/* webpackChunkName: "403" */ '@/views/static/403.vue')
        },
        {
            path: '404',
            name: '404',
            meta: {
                title: '404'
            },
            component: () => import(/* webpackChunkName: "404" */ '@/views/static/404.vue')
        },
        {
            path: '500',
            name: '500',
            meta: {
                title: '500'
            },
            component: () => import(/* webpackChunkName: "500" */ '@/views/static/500.vue')
        },
        
        
    ]
}