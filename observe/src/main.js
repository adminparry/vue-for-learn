import {observe} from './observe/index.js'
import {domFilter} from './domFilter/index.js'

export class Vue{
	constructor(props) {
		this.el = props.el;
		this.data = props.data;
		observe(this.data,this);
		domFilter(document.querySelector(this.el),this)
	}
}
new Vue({
	el:'#app',
	data:{
	text:'hello vue'
	}
})