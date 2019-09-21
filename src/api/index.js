//引入ajax
import ajax from './ajax.js'


//获取服务策略的接口
export const reqQolicyDescList = () =>ajax ('/mock/policyDescList')
//获取商品导航的接口
export const reqKingKongModule = () => ajax('/mock/kingKongModule')
//获取私人定制的接口
export const reqQersonalShop = () => ajax('/mock/personalShop')