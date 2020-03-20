<template>
    <div ref="div">hello</div>
</template>
<script>
export default {
    mounted(){
        
        const { div } = this.$refs;
        div.style.background = 'red'
    }
}
</script>