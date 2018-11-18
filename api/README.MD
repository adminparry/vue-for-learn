[![vuejs](https://cn.vuejs.org/images/logo.png "vuejs")](https://cn.vuejs.org/)

## 模板语法

### text
```html
<div id="app">
  <p>{{ message }}</p>
</div>
<script>
	new Vue({
	  el: '#app',
	  data: {
	    message: 'Hello Vue.js!'
	  }
	})
</script>
```
### html
```html
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
```

### attribute
```html
<div id="app">
  <label for="r1">修改颜色</label>
  <input type="checkbox" v-model="class1" id="r1">
  <br><br>
  <div v-bind:class="{'class1': class1}">
    directiva v-bind:class
  </div>
</div>
    
<script>
new Vue({
    el: '#app',
  data:{
      class1: false
  }
});
</script>
```

### mustache
```html
<div id="app">
    {{5+5}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id">菜鸟教程</div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    ok: true,
    message: 'RUNOOB',
    id : 1
  }
})
</script>
```

## 指令


### if
```html

<<divdi  id="app">
    <p v-if="seen">现在你看到我了</p>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    seen: true
  }
})
</script>
```