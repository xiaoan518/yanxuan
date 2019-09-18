import Vue from 'vue'
// 引入lib-flexible
import 'lib-flexible/flexible'
import App from './App.vue'
//引入路由器并注册
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  // store
})
