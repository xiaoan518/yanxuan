// 引入数据
// import category from './category.json'
// import categoryList from './categoryList.json'
import homeData from './homeData.json'
// 引入mock
import Mock from 'mockjs'



// mock 生成随机的数据,拦截ajax请求
// 使用mock方法,拦截地址,返回数据结构

// 服务策略
Mock.mock('/mock/policyDescList', {
  code: 0,
  data: homeData.policyDescList
})
Mock.mock('/mock/kingKongModule', {
  code: 0,
  // 商品导航
  data: homeData.kingKongModule
}),
 // 私人定
Mock.mock('/mock/personalShop', {
  code: 0,
  data: homeData.personalShop
})


//调用Mock.mock('/拦截地址',生成数据相关的模版的方式)