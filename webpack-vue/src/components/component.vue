<template>
    <div>
        <my-component title="666" class="baz boo"></my-component>
        <for></for>
    </div>
</template>
<script>
import For from './for';

export default {
    components: {
        'my-component': {
            // data(){
            //     return {
            //         title: 'hello'
            //     }
            // },
            props: ['title'],
            template: '<h3>{{ title }}</h3>'
        },
        For,
    }
}
</script>