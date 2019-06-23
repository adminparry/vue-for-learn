import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// nprogress instruction 
// NProgress.configure({ showSpinner: false }) 是否显示标志圈
// NProgress.start() 触发开始
// NProgress.done() 结束
import store from '@/store';
import { fetcher } from '@/fetchers';

import { routers } from '@/routers'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

Vue.use(Router)

const staticRouterList = ['/login', '/callback', '/403'];

// expose Router Instance 
const RouterInstance = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: routers
})
// 全局路由前置拦截监听器
// beforeEach beforeResolve
RouterInstance.afterEach(() => {
  // 后退返回时并不会触发afterEach
  // 停止旋转
  NProgress.done();
})
// RouterInstance.beforeEnter(()=>{
//   console.log('beforeEnter')
// })
// 没有用户信息 并且也没有session 的标志
let status = false;
const isLogin = async (path) => {
  const { userInfo } = store.getters;

  if (null != userInfo) {
    //  生成该角色拥有的静态权限
    store.dispatch('router/generateRoute', userInfo.permission);
    return true;
  } else {

    if (status) {
      return status = false
    };
    const session = await fetcher({
      url: '/api/isLogin',
      method: 'get',
    }).then(res => {
      //  生成该角色拥有的静态权限
      if (!res) return;
      if(!res.data.isLogin)return;
      store.dispatch('router/generateRoute', res.data.permission);
      store.dispatch('login/setUserInfo', res.data);
      return res;
    });

    return !!session;

  }
}
RouterInstance.beforeResolve(async (to, from, next) => {


  // if(to.path != '/login'){

  //   if(session.status == 555){
  //     next({path: '/login'})
  //   }else{

  //   }
  // }
  // 这个地方已经登录的进login不好做
  const isSession = await isLogin(to.path);
  console.log(isSession)
  if (isSession) {
    if (to.path == '/login') {
      next({ path: '/', replace: true });
      // next({ ...to, replace: true })
    } else {
      next();

    }

  } else {
    if (staticRouterList.includes(to.path)) {
      // 如果没有登录还去登录的时候过
      next();
    } else {
      status = true;
      NProgress.done();
      next({ path: '/login', replace: true });
    }

  }



})
RouterInstance.beforeEach(async (to, from, next) => {

  // 开始旋转
  NProgress.start();
  // 设置标题
  document.title = to.meta.title;

  if (to.matched.length ===0) {  //如果未匹配到路由
    from.name ? next({ name:from.name }) : next('/static/404');   //如果上级能匹配到则转上级路由
  }
  // 判断登录状态

  // const isLogin = !!store.getters.userInfo;
  // if(isLogin){
  //   // 已经登录了
  //   if(to.path == '/login'){
  //     // 如果是登录页面跳转到首页
  //     next({ path: '/' , replace: true});
  //   }else{
  //     next()
  //     // next({ ...to, replace: true })
  //   }
  // }else{

  //   if(staticRouterList.indexOf(to.path) > -1){
  //     next();
  //   }else{
  //     next({ path: '/login'})
  //   }
  // }
  next();

})

export default RouterInstance
