<template>
    <div id="example">
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            message: 'hello'
        }
    },
    computed: {
        reversedMessage(){
            return this.message.split('').reverse().join('')
        }
    }
}
</script>