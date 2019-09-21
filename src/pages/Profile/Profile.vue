<template>
  <div class="profile">
    <!-- 个人头部 -->
    <div class="profile-header">
      <ul class="profile-list">
        <li  class="home-li first-li"  @click="goto('./home')">
          <a href="javascriot:;">
            <i class="iconfont icon-menu-home-normal"></i>
          </a>
        </li>
        <li  @click="goto('./home')">
        <a class="home-li center-li" href="javascript:;">网易严选</a>
      </li>
      <li class="home-li center2-li">
        <a href="javascriot:;">
         <i class="iconfont icon-magnifier"></i>
        </a>
      </li>
      <li class="home-li right-li" @click="goto('./shopping')">
         <a href="javascript:;">
            <i class="iconfont icon-dinglanyoucegouwuche21"></i>
          </a>
      </li>
      </ul>
      
    </div>
    <!-- 网易严选图片 -->
    <div class="setting">
      <div>
      <img class="img" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"  alt="">
      </div>
    </div>

    <!-- 手机号登录 -->
   <div class="register">
     
        <button class="s-register">
          <i class="iconfont icon-phone"></i>
          手机号快捷登录
          </button>
     
     
        <button class="e-register" >
          <i class="iconfont icon-youxiang"></i>
          邮箱账号登录登录
          </button>
     
     
   </div>

   <!-- 微信  qq  微博 -->
   <div class="link" >
     <ul class="v-link">
       <li class="WeChat">
         <a href="javascript:;">
           <i class="iconfont icon-weixin1"></i>
           <span>微信</span>
         </a>
       </li>

       <li class="qq">
         <a href="javascript:;">
           <i class="iconfont icon-qq"></i>
           <span>QQ</span>
         </a>
       </li>

       <li class="microblog">
         <a href="javascript:;">
           <i class="iconfont icon-weibo"></i>
           <span>微博</span>
         </a>
       </li>
     </ul>
   </div>

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

<style lang="stylus" rel="stylesheet/stylus" >
.profile
  width 100%
  height 100%
  position relative
  .profile-header
    width 100%
    height 100%
    background-color white
    .profile-list
      width 100%
      height 80px
      line-height 80px
      .home-li 
        float left
        .iconfont
          font-size 50px
      .first-li
        margin-left 25px
      .center-li
        margin-left 200px
        font-size 35px
        font-weight 530
        color #333
      .center2-li
        margin-left 155px
      .right-li
        margin-left 20px
  .setting
    width 100%
    height 490px
    background-color #F2F5F4
    position relative
    .img 
      width 3.53rem
      height 85px
      position absolute
      top 0
      left 0
      bottom 0
      right 0
      margin auto
     
  .register
    width 100%
    height 109px
    background-color #F2F5F4
    font-size 16px 
    position relative
    .iconfont
      font-size 30px
    
    .s-register
      width 695px
      height 96px
      margin-left 20px
      background-color #DD1A21
      color white
      position absolute
      left 10px
      top 70px
      font-size 30px
      z-index 2
      font-size 30px
    .e-register
      width 695px
      height 96px
      margin-left 20px
      background-color #F2F5F4
      color #DD1A21
      border 1px #DD1A21 solid 
      margin-top 20px
      position absolute
      left 10px
      top 180px
      z-index 3
      font-size 30px
  .link
    width 100%
    height 100%
    background-color #F2F5F4
    position absolute
    top 540px
    font-size 30px
    .v-link
      width 100%
      height 50px
      line-height 50px
      position absolute
      bottom 5px
      left 0px
      font-size 27px
      
      li
        float left
        .iconfont
          margin-right 10px
          font-size 30px
      .WeChat
        margin-left 120px
      .qq
       margin-left 80px
      .microblog
        margin-left 80px
      
      
    


        
     

    
</style>
