<template>
	<el-pagination
	  :page-size="20"
	  :pager-count="11"
	  background
	  layout="pager,prev,next"
	  :total="1000">
	</el-pagination>
</template>
<script>
import Vue from 'vue'

import ElPagination from '../package/pagination'
Vue.component('el-pagination', ElPagination)


export default {
  name: 'App'
}
</script>