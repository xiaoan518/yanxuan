<template>
  <div class="home">
    <!-- 首页头部样式 -->
    <div class="header">
      <div class="header-log"></div>
      <div class="header-search">
        <i class="iconfont icon-magnifier"></i>
        <span class="placeholder">搜索商品, 共22629款好物</span>
      </div>
      <button class="btn">登录</button>
    </div>
    <!-- 首页导航栏 -->
    <div class="home-nav">
      <div class="nav">
        <ul class="nav-list">
          <li class="active">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>
            <i class="iconfont icon-v2"></i>
          </li>
        </ul>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/254a86a3cf479907522dc62feccb9607.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/ccfde8af22184921682d049b00b34be2.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/91bad38a8676cdfe6069e421bcdeb433.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/e47220bbd8030b9c26f574eeb769dfde.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/c74f5ba03c908826f32985c392f19199.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/2565b1fa18e4b8b64aad0710c9725aa1.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/2565b1fa18e4b8b64aad0710c9725aa1.jpg" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    </div>

    <!--30天无理由退货  -->
    <div class="sale">
      <span>
        <i class="iconfont icon-yi"></i>
        网易自营品牌
      </span>
       <span>
        <i class="iconfont  icon-anquan gauge "></i>
        30天无忧退货
      </span>
       <span>
        <i class="iconfont icon-tuikuan"></i>
        48小时快速退款
      </span>
    </div>

    <!-- 商品列表 -->
    <div class="commodity">
      <a href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"  alt=""></a>
      <a href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"  alt=""></a>
      <a href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png"  alt=""></a>
      <a href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"   alt=""></a>
      <a href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"   alt=""></a>
      <a href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"   alt=""></a>
      <a href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png"   alt=""></a>
      <a href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"  alt=""></a>
      <a href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png"   alt=""></a>
      <a href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif"   alt=""></a>
    </div>

    <!-- 广告 -->
    <div class="data-reacted">
      <a href="javascript:;">
        <img class="img" src="https://yanxuan.nosdn.127.net/0c4ffbf4ff8f6f793bd5bb9d0d8f90e1.gif" alt="">
      </a>
    </div>

    <!-- 促销 -->
    <div class="v-promotion">
      <div class="data-promotion">
        <a href="javascript:;">
          <div class="title">9.9超值专区</div>
          <div class="desc">190款商品定价只降</div>
          <div class="picList">
            <img class="img" src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png" alt="">
            <img class="img" src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png" alt="">
          </div>
        </a>
      </div>

    </div>

  </div>
</template>

<script>
//引入swiper
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {

  mounted () {
    new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay: true,//可选选项，自动滑动
    speed:100,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
     bulletClass : 'my-bullet', //需设置.my-bullet样式 
  })   
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.home
  width 100%
  height 100%
  // background red
.header
  width 100%
  height 50px
  background white
  display flex
  line-height 50px
  .header-log
    background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
    background-size 70px
    background-repeat no-repeat
    width 85px
    height 25px
    margin-left 15px
    margin-top 10px
    // margin-right 1px
  .header-search
    margin-top 7px
    width 200px
    height 30px
    display flex
    line-height 30px
    background #ededed
    border-radius 5px
    .iconfont
      width 50px
      height 50px
      margin-left 10px
      font-size 20px
      color #666
    .placeholder
      color #666
      margin-left -18px
      font-size 10px
  .btn
    color #b4282d
    background white
    width 40px
    height 20px
    border 1px #b4282d solid
    margin-top 13px
    margin-left 17px
.home-nav
  width 100%
  height 100%
  // background red
  .nav
    width 100%
    height 100%
    .nav-list
      display flex
      flex 1
      justify-content center
      align-items center
      font-size 15px
      color #666
      li
        margin-right 15px
        font-weight 510
        &:last-child 
          margin-left  20px
        .iconfont
          font-weight 800
          // background red
        &.active
          color red
.swiper-container 
    width: 100%;
    height: 100%;
    margin-top 5px
  .swiper-wrapper
    width 100%
    height 200px
    img 
      width 100%
      height 200px
.sale
  width 100%
  height 30px
  line-height 30px
  .iconfont
    color #b4282d
    font-size 20px
    margin 0 5px
.commodity
  width 100%
  height 100%  
  .img
    width 65px
    height 65px
    margin 0 5px
.data-reacted
  widows 100%
  height 100%
  margin-top 5px
  .img
    width 100%
    height 70px
.v-promotion
  width 100%
  height 100%
  
  .data-promotion
    width 50%
    height 150px
    background-color rgb(245,245,245)
    margin-left 10px
    margin-top 5px
    overflow hidden
    .title
      width 100%
      color #333
      margin 15px 0 10px 15px
      font-size 15px
    .desc
      width 100%
      padding-left 15px


    .img
      width 50px
      height 50px
  
  </style>








  <style>
  .swiper-pagination-bullet{
    width: 40px;
    height: 5px;
  }
  </style>
