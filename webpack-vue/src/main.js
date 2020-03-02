import Vue from 'vue';
import Hello from './components/hello.vue'

new Vue({
    render: h => h(Hello)
}).$mount("#app")