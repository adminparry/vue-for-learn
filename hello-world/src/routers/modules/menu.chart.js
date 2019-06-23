
import Layout from '@/components/Layout';

export default  {
    order: 4,
    path: '/chart',
    component: Layout,
    meta: {
        title: '图表',
        
    },
    icon: 'el-icon-data-analysis',
    permission: '3',
    children: [
        {
            path: 'line',
            name: 'line',
            permission: '4',
            component: () => import(/* webpackChunkName: "chart_line" */ '@/views/chart/Line.vue'),
            meta:{
                title: '折线图',
                icon: 'el-icon-star-off'
            },
            icon: 'el-icon-star-off'
        },
        {
            path: 'bar',
            name: 'bar',
            permission: '5',
            component: () => import(/* webpackChunkName: "chart_bar" */ '@/views/chart/Bar.vue'),
            meta:{
                title: '柱状图',
                icon: 'el-icon-star-off'
            },
            icon: 'el-icon-star-off'
        }
    ],
    
}

