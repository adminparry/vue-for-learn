<template>
  <div>
        <h1>表达式</h1>
        <h2>{{message}}</h2>
        <h3>{{ 1 + 1 }}</h3>
        <h4>{{ new Date() }}</h4>
        
  </div>
</template>
<script>
export default {
    data(){
        return {
            message: 'how are you'
        }
    }
}
</script>