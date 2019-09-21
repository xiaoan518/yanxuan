import Vue from 'vue'
// 引入lib-flexible
import 'lib-flexible/flexible'
import App from './App.vue'
//引入路由器并注册
import router from './router'
//引入store
import store from './store'
//引入Header组件并注册成全局组件
import Header from './components/Header/Header.vue'
import Header2 from './components/Header2/Header2.vue'
//引入mock文件
 import './mock/mock.server.js'
// 注册全局组件
Vue.component('Header',Header)
Vue.component('Header2', Header2)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router, //注册路由
  store   //注册仓库
  
})
