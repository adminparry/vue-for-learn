<template>
    <form v-on:submit.prevent="onSubmit">
        用户名: <input type="text"> <br>
        密码: <input type="password"> <br>
        <input @click="getValideCode" type="button" value="获取验证码"> <br>
        <input type="submit" value="提交">
    </form>
</template>
<script>
export default {
    methods: {
        onSubmit(){
            console.log('阻止表单提交')
        },
        getValideCode(){
            alert('验证码883666');
            this.$emit('give-advice', Math.random())
        },
        defineEvent(){
            console.log("by my self events")
        }
    }
}
</script>