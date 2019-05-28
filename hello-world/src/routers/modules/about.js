import apollo from './apollo';

export const about = {
    path: '/about',
    name: 'about',
    meta: {
        title: '关于我们'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    children: [
        apollo
    ]
}