<style lang="less">
	#bottom{
		padding-left: 200px;
		overflow:hidden;
		position:relative; 
	    height:42px; 
	    line-height: 42px; 
	    margin-top:-42px;
		ul{
			overflow:hidden;

		}
		ul li{
			float:left;
			list-style:none;
			padding:0px 10px;

		}
	}
</style>	
<template>
	<div id="bottom">
		<ul>
			<li><nuxt-link to="/">index</nuxt-link></li>
			<li><a href="#">帮助</a></li>
			<li><a href="#">举报</a></li>
			<li><a href="#">用户反馈</a></li>
			<li><nuxt-link to="/about">关于我们</nuxt-link></li>
		</ul>
	</div>
</template>
<script>
	console.log(Vue)
</script>
