<template>
    <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</template>
<script>
export default {
    data(){
        return {
            todos: [
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
            ]
        }
    }
}
</script>