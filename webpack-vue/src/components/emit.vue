<template>
    <div>
        <event @give-advice="bymyself" />
    </div>
</template>
<script>
import Event from './event';

export default {
    methods:{
        bymyself(arg){
            console.warn("触发自定义事件",arg);
        }
    },
    components:{
        Event
    }
}
</script>