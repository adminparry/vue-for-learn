<template>
  <div>

    <section class="container">
      <h1>关于我们</h1>
    </section>
    
    <bottom-footer/>
  </div>
  
</template>

<script>

import BottomFooter from '~/components/BottomFooter.vue'


export default {
  components: {
    BottomFooter
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}

</style>
