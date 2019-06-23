
import Layout from '@/components/Layout';

export default  {
    order: 1,
    path: '/',
    component: Layout,
    redirect: '/home',
    permission: '0',
    meta: {
        title: '主页',
    },
    children: [
        {
            path: 'home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
            meta:{
                title: '主页',
                icon: 'el-icon-star-off'
            },
            permission: '0',
            icon: 'el-icon-star-off'
        }
    ],
    
}

