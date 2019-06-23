import apollo from './apollo';
import fade from './fade';
import Layout from '@/components/Layout';

export default  {
    order: 5,
    path: '/about',
    name: 'about',
    meta: {
        title: '关于我们'
    },
    permission: '6',
    component: Layout,
    icon: 'el-icon-s-goods',
    children: [
        {
            path: 'us',
            name: 'us',
            permission: '7',
            meta: {
                title: 'us',
            },
            icon: 'el-icon-s-promotion',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "apollo" */ '@/views/about/us.vue')
        },
        fade
    ]
}