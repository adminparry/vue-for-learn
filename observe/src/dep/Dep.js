export class Dep{
	constructor(props) {
		
		this.sub = [];
	}
	addSub(s){
		this.sub.push(s)
	}
	notify(){
		this.sub.forEach(item=>item.update())
	}
}