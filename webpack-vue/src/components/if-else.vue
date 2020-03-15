<template>
    
    <div>
        <button @click="clickHandler">{{status ? text : text1}}</button>
       
        <div v-if="status" style="background:red;width:200px;height:200px"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            text: '去除',
            text1: '添加',
            status: false
        }
    },
    methods:{
        clickHandler(){
            this.status = !this.status;
        }
    }
}
</script>