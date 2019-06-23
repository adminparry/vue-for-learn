import Layout from '@/components/Layout';

export default {
    order:2,
    path: '/user',
    name: 'user',
    component: Layout,
    meta: {
        title: '用户管理'
    },
    permission: '0',
    children: [
        {
            path: 'add',
            component: () => import(/* webpackChunkName: "user" */'@/views/User.vue'),
            meta: {
                title: '用户新增'
            },
            permission: '1'
        },
        {
            path: 'role',
            component: () => import(/* webpackChunkName: "user" */'@/views/Roles.vue'),
            meta: {
                title: '用户权限'
            },
            permission: '2'
        },
        
    ],
    
}