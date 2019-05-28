# 表达式

``` html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>表达式来说的话没有特别的出处 传统mustache</title>
<script src="https://cdn.staticfile.org/vue/2.4.2/vue.min.js"></script>
</head>
<body>
<div id="app">
  <p>{{ message }}</p>
  <p>{{ 1+1 }}</p>
</div>

<script>
new Vue({
	// 指定工作的节点位置
  el: '#app',
  // 属性映射
  data: {
    message: 'Hello Vue.js!'
  }
})
</script>
</body>
</html>
```

