<template>
    <canvas ref="canvas"></canvas>
</template>
<script>
import QRCode from 'qrcode';

export default {
    props:{
        size:{
            required: true,
            type: Number,
        },
        url: {
            required: true,
            type: String,
        },
        fn: {
            required: true, 
            type: Function
        }
    },
    mounted(){
        // 用第三方的东西就是满足不了自己的意愿而且文档相当恶心 不说人话
       QRCode.toCanvas(this.$refs['canvas'], this.url, this.fn)
    }    
}
</script>

