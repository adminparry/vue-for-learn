import Vue from 'vue';

import Pager from './component/self.page.vue'

new Vue({
	el:'#app',
	components:{Pager},
	
	render(){
		
		return <pager currentPage={1} pageCount={22}></pager>
	}
})