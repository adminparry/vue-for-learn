import {Watcher} from '../watcher/Watcher.js'

function domFilter(dom,context){

  var dcf = document.createDocumentFragment();
  var firstChild;
  while(firstChild = dom.firstChild){
    compile(firstChild, context.data);
    dcf.appendChild(firstChild);
  }
  dom.appendChild(dcf);
}


function compile (node, context) {
  var reg = /\{\{(.*)\}\}/;

  // 节点类型为元素
  if (node.nodeType === 1) {

    var name = node.getAttribute('v-model');

    node.addEventListener('input', function (e) {
          // 给相应的 data 属性赋值，进而触发该属性的 set 方法
          console.log(context)
        context[name] = e.target.value;
    });
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

export {domFilter}