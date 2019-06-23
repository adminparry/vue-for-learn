import Vue from 'vue';
/**
 * bind?: DirectiveFunction;只调用一次，在指令第一次绑定到元素上时候调用
  inserted?: DirectiveFunction;当绑定元素插入到 DOM 中。
  update?: DirectiveFunction;在bind之后立即以初始值为参数第一次调用，之后绑定值变化的时候，参数为新值与旧值
  componentUpdated?: DirectiveFunction;
  unbind?: DirectiveFunction;只调用一次，在指令从元素上解绑的时候调用


  DirectiveFunction = (
  el: HTMLElement,
  binding: DirectiveBinding,
  vnode: VNode,
  oldVnode: VNode
) => void;
 */
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    bind: function (el,binding,vnode,oldVnode) {
        console.log(arguments)
        // 聚焦元素
        el.focus()
    }
})