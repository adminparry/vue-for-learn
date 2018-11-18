import {Dep} from '../dep/Dep.js';

export class Watcher{
	constructor(context, node, name, nodeType) {
		
		Dep.target = this;

		this.name = name;
		this.node = node;
		this.vm = context;
		this.nodeType = nodeType;
		this.update();

		Dep.target = null;

	}
	update(){
		this.value = this.vm[this.name];
		if(this.nodeType == 'text'){
			
			this.node.nodeValue = this.value;
		}
		if(this.nodeType == 'input'){
			this.node.value = this.value;
		}
	}
	get(){
		this.value = this.vm[this.name];
	}
}