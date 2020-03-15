<template>
    <div>
        <input v-bind:type="type">
    </div>
</template>
<script>
export default {
    data(){
        return {
            type: 'date'
        }
    }
}
</script>