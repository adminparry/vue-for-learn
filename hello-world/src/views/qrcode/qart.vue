<template>
  <vue-q-riously :fn="fn" url="Hello World!" :size="200" />
</template>

<script>
import VueQriously from '@/components/Qrcode';

export default {
  components: { VueQriously },
  methods:{
      fn(err){
          console.log(err)
      }
  }
};
</script>
