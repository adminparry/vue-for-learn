// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

export const routers = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath);
  if(!value.default)return modules;
  if (moduleName.indexOf('menu') > -1) {
    // 标记用于菜单的路由
    value.default.use = 'menu';
  }
  modules.push(value.default)



  return modules

}, [])

console.info("router count is %s", routers.length)

