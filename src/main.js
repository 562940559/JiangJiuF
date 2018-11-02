// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import App from './App';
import router from './router';
import './libs/less/reset.css';
import store from './store';
import * as http from './services';
import * as ajax from './services2';

router.beforeEach((to, from, next) => {
  if (store.state.isLogin === true){
    next()
  } 
  if (!window.localStorage.getItem('token')) {
    if (to.meta.authRequired) {
        next({
          name: 'unlogin',
          params: {to}
        })
      } else {
        next()
      }
  } else {
    next()
  }
})

// 把假数据放到vue原型中去 方便调用
Vue.prototype.$ajax = ajax;
Vue.prototype.$http = http;

Vue.config.productionTip = false;
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
