
<template>
  <div >
    <router-view></router-view>
    
    <FooterGuide v-show="$route.meta.isShowFooter" />
  </div>
</template>

<script>
//引入底部的导航组件FooterGuide.vue
import FooterGuide from "./components/FooterGuide/FooterGuide";
//引入api
import {reqQolicyDescList,reqKingKongModule,reqQersonalShop} from './api'
export default {
  //注册组件
  components: {
    FooterGuide
  },
  async mounted () {
    
    const result1 =await reqQolicyDescList()
    console.log(result1)
  
    const result2 =await reqKingKongModule()
    console.log(result2)

    const result3 =await reqQersonalShop()
    console.log(result3)
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
