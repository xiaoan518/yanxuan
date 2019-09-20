<template>
  
  <div class="profile-header" >
    <slot name="left"/>
    <ul class="profile-list">
      <li class="home-li first-li">
        <a href="javascriot:;">
          <i class="iconfont icon-menu-home-normal"></i>
        </a>
      </li>
      <li>
        
        <a class="home-li center-li" href="javascript:;"><span class="span-font">发现</span><span>选甄家</span></a>
      </li>
      <li class="home-li center2-li">
        <a href="javascriot:;">
          <i class="iconfont icon-magnifier"></i>
        </a>
      </li>
      <li class="home-li right-li">
        <a href="javascript:;">
          <i class="iconfont icon-dinglanyoucegouwuche21"></i>
        </a>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.profile-header
  width 100%
  height 100%
  background-color white
  .profile-list
    width 100%
    height 90px
    line-height 90px
    border-bottom 2px #7F7F7F solid 
    span 
      font-size 30px
    .span-font
      
      color #b4282d
      font-weight bold
      font-size 40px
      margin-right 20px
    .home-li
      float left
      .iconfont
        font-size 50px
       
    .first-li
      margin-left 25px
      height 40px
    .center-li
      margin-left 200px
      font-size 35px
      font-weight 530
      color #333
    .center2-li
      margin-left 135px
    .right-li
      margin-left 20px
</style>
