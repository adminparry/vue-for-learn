import Vue from 'vue';
import VueRouter from 'vue-router';


import Hello from './components/hello.vue'

Vue.use(VueRouter);



const routes = [

    { path: '/for', component: () => import('./components/for.vue') },
    { path: '/exp', component: () => import('./components/exp.vue') },
    { path: '/', component: () => import('./components/menu.vue') },
    { path: '/show', component: () => import('./components/show-hide.vue') },
    { path: '/if', component: () => import('./components/if-else.vue') },
    { path: '/html', component: () => import('./components/html.vue') },
    { path: '/attr', component: () => import('./components/attr.vue') },
    { path: '/event', component: () => import('./components/event.vue') },
    { path: '/watch', component: () => import('./components/watch.vue') },
    { path: '/computed', component: () => import('./components/computed.vue') },
    { path: '/component', component: () => import('./components/component.vue') },
     
    
]
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
new Vue({
    router,
    el: '#app',
    template: '<Hello/>',
    components: { Hello },
    // render: h => h(Hello)
})