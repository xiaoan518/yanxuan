<template>
  <!-- 头部样式 -->
  <div class="header-class">
    <Header slot="left" />
    <!-- 分类列表 -->
    <div class="listings">
      <div class="ify-left">
        <ul class="ify-list">
          <li>
            <a style="color:red" href="javascript:;">推荐专区</a>
          </li>
          <li>
            <a href="javascript:;">换季专区</a>
          </li>
          <li>
            <a href="javascript:;">爆品专区</a>
          </li>
          <li>
            <a href="javascript:;">新品专区</a>
          </li>
          <li>
            <a href="javascript:;">居家生活</a>
          </li>
          <li>
            <a href="javascript:;">服饰鞋包</a>
          </li>
          <li>
            <a href="javascript:;">各户清洁</a>
          </li>
          <li>
            <a href="javascript:;">母婴亲自</a>
          </li>
          <li>
            <a href="javascript:;">运动旅行</a>
          </li>
          <li>
            <a href="javascript:;">数码家电</a>
          </li>
          <li>
            <a href="javascript:;">全球特色</a>
          </li>
        </ul>
      </div>
      <div class="idy-right">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/254a86a3cf479907522dc62feccb9607.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/ccfde8af22184921682d049b00b34be2.jpg" alt />
            </div>
           
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
      
        </div>
        <!-- 轮播图下分类列表 -->
        <div class="service">
          <ul class="service-list">
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="">
              <div>明星商品</div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="">
              <div>明星商品</div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="">
              <div>明星商品</div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="">
              <div>明星商品</div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="">
              <div>明星商品</div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="">
              <div>明星商品</div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="">
              <div>明星商品</div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="">
              <div>明星商品</div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="">
              <div>明星商品</div>
            </li>
          </ul>
        </div>
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

<style lang="stylus" rel="stylesheet/stylus" scope >
.header-class
  width 100%
  height 1500px
  // box-sizing border-box
  background-color white 
  .header-search
    width 700px
    margin 0 auto
    margin-top 20px
    .iconfont
      margin-left 165px
    .placeholder
      margin-left 10px
  .listings
    width 100%
    height 100%
    margin-top -19px
    // background-color whites
    .ify-left
      width 162px
      height 1119.8px
      float left
      margin-top 30px
      background-color white
      .ify-list
        font-size 30px
        line-height 100px
        text-align center
      a
        color #333
    .idy-right
      width 528px
      height 872px
      // background-color blue
      float left
      margin-left 30px
      margin-top 60px
      .swiper-container
        width 100%
        height 192px
        .swiper-wrapper
          width 100%
          height 192px
          .swiper-slide
            width 100%
            height 192px
            img 
              width 528px
              height 192px
  .service
    width 100%
    height 100%
    .service-list
      width 528px
      height 648px
      // background-color pink 
      margin-top 20px
      overflow hidden
      li
        float left
        margin 20px 15px 0 15px
        text-align center
        img 
          width 144px
          height 144px

</style>






<style>
  .swiper-pagination-bullet{
    width: 40px;
    height: 5px;
  }
  </style>

