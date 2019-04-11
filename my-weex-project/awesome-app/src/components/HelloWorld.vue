<template>
	<div class="wrapper">
		<image :src="logo" class="logo" />
		<text class="greeting">The environment is ready!</text>
	  	<text class="message">Now, let's use Vue.js to build your Weex app.</text>
	  	<router-link tag="li" to="/video">
		  <a>/video</a>
		</router-link>
	</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>