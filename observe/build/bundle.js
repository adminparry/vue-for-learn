(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.observe = {})));
}(this, (function (exports) { 'use strict';

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var Dep = function () {
		function Dep(props) {
			classCallCheck(this, Dep);


			this.sub = [];
		}

		createClass(Dep, [{
			key: "addSub",
			value: function addSub(s) {
				this.sub.push(s);
			}
		}, {
			key: "notify",
			value: function notify() {
				this.sub.forEach(function (item) {
					return item.update();
				});
			}
		}]);
		return Dep;
	}();

	var observe = function observe(data, context) {
	  Object.keys(data).forEach(function (item) {
	    defineReactive(data, item, data[item]);
	  });
	};

	function defineReactive(context, key, val) {

	  var dep = new Dep();

	  Object.defineProperty(context, key, {
	    get: function reactiveGetter() {
	      console.log(val);
	      if (Dep.target) dep.addSub(Dep.target);
	      return val;
	    },
	    set: function reactiveSetter(newVal) {

	      if (newVal == val) return;
	      val = newVal;
	      dep.notify();
	    }
	  });
	}

	var Watcher = function () {
		function Watcher(context, node, name, nodeType) {
			classCallCheck(this, Watcher);


			Dep.target = this;

			this.name = name;
			this.node = node;
			this.vm = context;
			this.nodeType = nodeType;
			this.update();

			Dep.target = null;
		}

		createClass(Watcher, [{
			key: 'update',
			value: function update() {
				this.value = this.vm[this.name];
				if (this.nodeType == 'text') {

					this.node.nodeValue = this.value;
				}
				if (this.nodeType == 'input') {
					this.node.value = this.value;
				}
			}
		}, {
			key: 'get',
			value: function get$$1() {
				this.value = this.vm[this.name];
			}
		}]);
		return Watcher;
	}();

	function domFilter(dom, context) {

	  var dcf = document.createDocumentFragment();
	  var firstChild;
	  while (firstChild = dom.firstChild) {
	    compile(firstChild, context.data);
	    dcf.appendChild(firstChild);
	  }
	  dom.appendChild(dcf);
	}

	function compile(node, context) {
	  var reg = /\{\{(.*)\}\}/;

	  // 节点类型为元素
	  if (node.nodeType === 1) {

	    var name = node.getAttribute('v-model');

	    node.addEventListener('input', function (e) {
	      // 给相应的 data 属性赋值，进而触发该属性的 set 方法
	      console.log(context);
	      context[name] = e.target.value;
	    });
	    // getter dep
	    node.value = context[name];


	    node.removeAttribute('v-model');

	    new Watcher(context, node, name, 'input');
	  }
	  // 节点类型为 text
	  if (node.nodeType === 3) {
	    if (reg.test(node.nodeValue)) {
	      var name = RegExp.$1; // 获取匹配到的字符串
	      name = name.trim();
	      new Watcher(context, node, name, 'text');
	    }
	  }
	}

	var Vue = function Vue(props) {
		classCallCheck(this, Vue);

		this.el = props.el;
		this.data = props.data;
		observe(this.data, this);
		domFilter(document.querySelector(this.el), this);
	};
	new Vue({
		el: '#app',
		data: {
			text: 'hello vue'
		}
	});

	exports.Vue = Vue;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
