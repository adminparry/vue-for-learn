<template>
    <ol>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <li><router-link to="/exp">表达式</router-link></li>
        <li><router-link to="/for">循环</router-link></li>
        <li><router-link to="/show">显示隐藏</router-link></li>
        <li><router-link to="/if">去除添加</router-link></li>
        <li><router-link to="/html">html</router-link></li>
        <li><router-link to="/attr">自定义属性</router-link></li>
        <li><router-link to="/event">事件</router-link></li>
        <li><router-link to="/computed">计算属性</router-link></li>
        <li><router-link to="/watch">监听属性</router-link></li>
        <li><router-link to="/component">组件</router-link></li>
        
    </ol>
</template>