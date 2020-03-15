<template>
    
    <div>
        <button @click="clickHandler">{{status ? text : text1}}</button>
       
        <div v-show="status" style="background:red;width:200px;height:200px"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            text: '隐藏',
            text1: '显示',
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