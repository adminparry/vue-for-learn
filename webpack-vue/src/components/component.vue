<template>
    <div>
        <my-component title="666" class="baz boo"></my-component>
    </div>
</template>
<script>
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
        }
    }
}
</script>