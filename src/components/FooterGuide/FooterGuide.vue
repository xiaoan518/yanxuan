<template>
    <div class="footer">
         <a href="javascript:;" class="footerItem " :class="{'on':$route.path==='/home'}" @click="goto('./home')" >
        <i class="iconfont icon-menu-home-normal"></i>
         <span>首页</span>
      </a>
     

      <a href="javascript:;" class="footerItem " :class="{'on':$route.path==='/classify'}" @click="goto('./classify')" >
        <i class="iconfont icon-classify"></i>
         <span>分类</span>
      </a>
     

       <a href="javascript:;" class="footerItem" :class="{'on':$route.path==='/food'}"  @click="goto('./food')">
        <i class="iconfont icon-knowledge"></i>
         <span>识物</span>
      </a>
     

       <a href="javascript:;" class="footerItem" :class="{'on':$route.path==='/shopping'}" @click="goto('./shopping')" >
        <i class="iconfont icon-dinglanyoucegouwuche21"></i>
        <span>购物车</span>
      </a>
      

      <a href="javascript:;" class="footerItem" :class="{'on':$route.path==='/profile'}" @click="goto('./profile')">
        <i class="iconfont icon-jingjirenjinglikehuxianxingcopy"></i>
        <span>个人</span>
      </a>
       
    </div>

</template>

<script>
export default {
  methods: {
    //根据传入的地址。跳转到对应的路由界面
    goto(path){
      this.$router.replace(path)
    }
  }
  
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer
  width 100%
  height 50px
  position fixed
  left 0
  bottom 0
  display flex
  border-top  1px #d9d9d9 solid 
  .footerItem
    display flex
    flex 1
    justify-content center
    align-items center
    flex-direction column
    &.on
      color #b4282d
    .iconfont
      font-size 24px
      margin 5px 0
    span 
      font-size 10px
            
       








</style>
