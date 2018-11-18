# 混入

``` html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
<script src="https://cdn.staticfile.org/vue/2.4.2/vue.min.js"></script>
</head>
<body>
<div id = "databinding"></div>
<script type = "text/javascript">
var mixin = {
	methods: {
		hellworld: function () {
			document.write('HelloWorld 方法' + '<br>');
		},
		samemethod: function () {
			document.write('Mixin：相同方法名' + '<br>');
		}
	}
};
var vm = new Vue({
	mixins: [mixin],
	methods: {
		start: function () {
			document.write('start 方法' + '<br>');
		},
		samemethod: function () {
			document.write('Main：相同方法名' + '<br>');
		}
	}
});
```

