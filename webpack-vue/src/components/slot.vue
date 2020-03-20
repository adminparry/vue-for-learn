<template v-slot:default="defaul">
    <div>
        {{ defaul.user.lastName }}
    </div>
</template>
<script>
export default {
    data(){
        return {
            user: {
                lastName: 'qin'
            }
        }
    }
}
</script>