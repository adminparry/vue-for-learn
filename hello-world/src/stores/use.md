index.js 加载所有modules下文件聚合store集中返回
modules中定义的文件名为store的命名空间的开头
modules中文件定义格式为
``` javascript
// 定义state
const state = {

}
// 定义mutation
const mutations = {

}
// 定义action
const actions = {

}
// 定义获取state缩略名getter
export const getter = {
    
}
// 默认模块导出 注意名字不要错误哦
export default {
    namespaced: true,
    actions,
    state,
    mutations
}
```