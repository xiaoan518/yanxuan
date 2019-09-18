//引入对应的四个路由组件

//首页组件
import Home from '../pages/Home/Home.vue'
//分类组件
import Classify from '../pages/Classify/Classify.vue'
//识物组件
import Food from '../pages/Food/Food.vue'
//购物车组件
import ShopPing from '../pages/ShopPing/ShopPing.vue'
//个人组件
import Profile from '../pages/Profile/Profile.vue'

//配置路由
export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/food',
    component: Food
  },
  {
    path: '/shopping',
    component: ShopPing
  },
  {
    path: '/profile',
    component: Profile
  },
  //重定向
  {
    path: '/',
    redirect: '/home'
  }
  
]