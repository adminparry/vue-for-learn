export default {
    path: '/callback',
    name: 'github',
    component: () => import(/* webpackChunkName: "github" */'@/views/github/Callback.vue'),
    meta: {
        title: 'github'
    }
}