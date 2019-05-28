``` javascript
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue

```

在这里明显看的出来Vue 这个对象应该是个function
然后原型上定义了两个方法 $isServer $ssrContext 和一个属性 FunctionalRenderContext
在这里还直接调用了个initGlobalAPI方法

[instance/index](./instance_index.md)

[global-api/index](./global-api_index.md)

[core/util/env](./core_util_env.md)

[core/vdom/create-functional-component](./core_vdom_create-functional-component.md)