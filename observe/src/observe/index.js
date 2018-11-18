import {Dep} from '../dep/Dep.js'

var observe = (data,context) =>{
	Object.keys(data).forEach((item)=>{
		defineReactive(data,item,data[item]);
	})
}

function defineReactive(context,key,val){

  var dep = new Dep();

  Object.defineProperty(context,key,{
    get:function reactiveGetter(){
    	console.log( val)
      if(Dep.target)dep.addSub(Dep.target)
      return val;
    },
    set:function reactiveSetter(newVal){
    	
      if(newVal == val)return 
      val = newVal;
      dep.notify();
    }
  })
}


export {observe}
