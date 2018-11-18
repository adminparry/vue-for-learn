# 指令

跟angular的指令表达类似

``` html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
</head>
<body>
<div id="app">
    <div v-html="message"></div>
</div>
	
<script>
new Vue({
  el: '#app',
  data: {
    message: '<h1>菜鸟教程</h1>'
  }
})
</script>
</body>
</html>
```
内置指令
1、v-bind：响应并更新DOM特性；例如：v-bind:href  v-bind:class  v-bind:title  v-bind:bb

2、v-on：用于监听DOM事件； 例如：v-on:click  v-on:keyup

3、v-model：数据双向绑定；用于表单输入等；例如：<input v-model="message">

4、v-show：条件渲染指令，为DOM设置css的style属性

5、v-if：条件渲染指令，动态在DOM内添加或删除DOM元素

6、v-else：条件渲染指令，必须跟v-if成对使用

7、v-for：循环指令；例如：<li v-for="(item,index) in todos"></li>

8、v-else-if：判断多层条件，必须跟v-if成对使用；

9、v-text：更新元素的textContent；例如：<span v-text="msg"></span> 等同于 <span>{{msg}}</span>；

10、v-html：更新元素的innerHTML；

11、v-pre：不需要表达式，跳过这个元素以及子元素的编译过程，以此来加快整个项目的编译速度；例如：<span v-pre>{{ this will not be compiled }}</span>；

12、v-cloak：不需要表达式，这个指令保持在元素上直到关联实例结束编译；

13、v-once：不需要表达式，只渲染元素或组件一次，随后的渲染，组件/元素以及下面的子元素都当成静态页面不在渲染。


## 事件指令

``` html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
</head>
<body>
<div id="app">
   <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
  事件修饰符

	.stop
	.prevent
	.capture
	.self
	.once
  	<!-- 阻止单击事件冒泡 -->
	<a v-on:click.stop="doThis"></a>
	<!-- 提交事件不再重载页面 -->
	<form v-on:submit.prevent="onSubmit"></form>
	<!-- 修饰符可以串联  -->
	<a v-on:click.stop.prevent="doThat"></a>
	<!-- 只有修饰符 -->
	<form v-on:submit.prevent></form>
	<!-- 添加事件侦听器时使用事件捕获模式 -->
	<div v-on:click.capture="doThis">...</div>
	<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
	<div v-on:click.self="doThat">...</div>

	<!-- click 事件只能点击一次，2.1.4版本新增 -->
	<a v-on:click.once="doThis"></a>
	<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
	<input v-on:keyup.13="submit">
	<!-- 同上 -->
	<input v-on:keyup.enter="submit">
	<!-- 缩写语法 -->
	<input @keyup.enter="submit">
	全部的按键别名：
	.enter
	.tab
	.delete (捕获 "删除" 和 "退格" 键)
	.esc
	.space
	.up
	.down
	.left
	.right
	.ctrl
	.alt
	.shift
	.meta
</div>

<script>
var app = new Vue({
  el: '#app',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
	  if (event) {
		  alert(event.target.tagName)
	  }
    }
    ...
  }
})
// 也可以用 JavaScript 直接调用方法
app.greet() // -> 'Hello Vue.js!'
</script>
</body>
</html>
```
## 自定义指令



