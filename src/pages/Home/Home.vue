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
       <span class="tuikuan">
        <i class="iconfont icon-tuikuan"></i>
        48小时快速退款
      </span>
    </div>

    <!-- 商品列表 -->
    <div class="commodity">
      <a class="a-commodity" href="javascript:;">
      <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"  alt="">
      <span class="z-commodity">新品首发</span>
      </a>
      <a class="a-commodity" href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"  alt="">
      <span class="z-commodity">新品首发</span>
      </a>
      <a class="a-commodity" href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png"  alt="">
      <span class="z-commodity">新品首发</span>
      </a>
      <a class="a-commodity" href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"   alt="">
      <span class="z-commodity">新品首发</span>
      </a>
      <a class="a-commodity" href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"   alt="">
      <span class="z-commodity">新品首发</span>
      </a>
      <a class="a-commodity" href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"   alt="">
      <span class="z-commodity">新品首发</span>
      </a>
      <a class="a-commodity" href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png"   alt="">
      <span class="z-commodity">新品首发</span>
      </a>
      <a class="a-commodity" href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"  alt="">
      <span class="z-commodity">新品首发</span>
      </a>
      <a class="a-commodity" href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png"   alt="">
      <span class="z-commodity">新品首发</span>
      </a>
      <a class="a-commodity" href="javascript:;"><img class="img" src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif"   alt="">
      <span class="z-commodity">新品首发</span>
      </a>
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
  height 87.97px
  background white
  display flex
  line-height 87.97px
  .header-log
    background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
    background-size 1.933333rem
    background-repeat no-repeat
    width 150px
    height 39.98px
    margin-left 15px
    margin-top 25px
  .header-search
    margin-top 20px
    margin-left 10px
    width 442px
    height 56px
    display flex
    line-height 56px
    background #ededed
    border-radius 5px
    .iconfont
      width 50px
      height 50px
      margin-left 10px
      font-size 30px
      color #666
    .placeholder
      color #666
      margin-left -18px
      font-size 30px
  .btn
    color #b4282d
    background white
    width 74px
    height 40px
    border 1px #b4282d solid
    font-size 25px
    margin-top 30px
    margin-left 30px
.home-nav
  width 100%
  height 100%
  margin-top 15px
  // background red
  .nav
    width 100%
    height 100%
    .nav-list
      display flex
      flex 1
      justify-content center
      align-items center
      font-size .37333rem
      color #666
      li
        margin-right 40px
        font-weight 510
        .iconfont
          font-size 30px
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
    margin-top 20px
  .swiper-wrapper
    width 100%
    height 400px
    img 
      width 100%
      height 400px
.sale
  width 100%
  height 80px
  line-height 80px
  span 
    margin-left  15px
  .tuikuan
  .iconfont
    color #b4282d
    font-size .32rem
    margin-left 15px
.commodity
  width 100%
  height 100%
  display flex
  flex-wrap wrap
  text-align center
  
  
  .a-commodity
    display flex
    flex-direction column
    .z-commodity
      margin-top 15px
      margin-left 15px
    
  .img
    width 110px
    height 110px
    margin-right 8px
    margin-left 26px
.data-reacted
  widows 100%
  height 100%
  margin-top 25px
  .img
    width 100%
    height 127px
.v-promotion
  width 100%
  height 100%
  display flex
  
  .data-promotion
    width 342px
    height 264px
    background-color rgb(245,245,245)
    margin-left 23px
    margin-top 25px
    
    overflow hidden
    .title
      width 100%
      color #333
      margin 25px 0 20px 25px
      font-size 30px
    .desc
      width 100%
      padding-left 25px
    .img
      width 150px
      height 150px
      
  
  </style>








  <style>
  .swiper-pagination-bullet{
    width: 40px;
    height: 5px;
  }
  </style>
