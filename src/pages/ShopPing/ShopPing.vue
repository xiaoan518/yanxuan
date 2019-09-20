<template>
  <div class="shop">
    <!-- 头部 -->
    <div class="header-shop">
      <span class="header-font left">购物车</span>
      <span class="header-font right">领券</span>
    </div>
    <!-- 假导航 -->
    <div class="nav-shop">
      <span class="shop-list">30天无忧退货</span>
      <span class="shop-list">48小时快速退款</span>
      <span class="shop-list">满88元免邮费</span>
    </div>
    <!-- 空购物车 -->
    <div class="setting">
      <div class="shop-iconfont">
      <i class="iconfont icon-dinglanyoucegouwuche21"></i>
      <div class="shop-font">去添加点儿什么吧</div>
    </div>
    <button class="shop-btn">登录</button>
    </div>
    

  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.shop
  width 100%
  height 100%
  .header-shop
    width 100%
    height 80px
    line-height 80px
    background-color white
    
    .header-font
      font-size 30px
    .left
      margin-left 20px
      color #333
    .right
      float right
      margin-right 45px
      color #B4282D
      font-size 27px
.nav-shop
  width 100%
  height 70px
  line-height 70px
  background rgb(238, 238, 238)
  .shop-list
    margin-right 65px
    &:first-child
      margin-left 45px
    &:last-child
      margin-right -10px
.setting
  width 100%
  height 590px
.shop-iconfont
  width 100%
  height 200px

  color grey
  position relative
  .iconfont
    display flex
    flex-wrap wrap
    text-align cente
    font-size 180px
    position absolute
    left 285px
    top 430px
  .shop-font
    position absolute
    left 235px
    top 630px
    font-size 35px
.shop-btn
    width 450px
    height 85px
    background-color #b4282d
    font-size 35px
    color white
    position absolute
    left 150px
    bottom 380px
    
    
   
</style>


<style lang="stylus"></style>