//引入vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
//引入路由配置的数组
import routes from './routes.js'

//声明路由
Vue.use(VueRouter)
//配置路由
export default new VueRouter({
  mode: 'history', // 不出现#
  routes
})
