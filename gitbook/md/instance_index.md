``` javascript
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue

```

像这样的代码我们可能80%能猜到在new Vue的时候调用的方法就是原型方法_init
这几个直接调用的方法估计就是在原型上添加方法 然后没个方法对应做的是一类的事情

[initMixin](./init.html)

[stateMixin](./state.html)


[eventsMixin](./events.html)

[lifecycleMixin](./lifecycle.html)

[renderMixin](./render.html)

