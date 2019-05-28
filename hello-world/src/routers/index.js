// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)
const arr = [];
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
export const routers = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
//   console.log(moduleName)
  arr.push(value[moduleName] ? value[moduleName] : value.default);
  
  return arr;

}, {})
console.info("router count is %s", arr.length)

