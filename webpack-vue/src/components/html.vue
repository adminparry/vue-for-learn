<template>
    <div>
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            rawHtml: '<h2>标题<h2>'
        }
    }
}
</script>