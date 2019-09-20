<template>
  <div class="foot-header">
    <Header2>
      <a class="home-li center-li" href="javascript:;">网易严dsd选</a>
    </Header2>
    <!-- nav -->
    <div class="food-nav">
      <ul class="foot-list">
        <li>家装节</li>
        <li>推荐</li>
        <li>好货内部价</li>
        <li>回购榜</li>
        <li>家装节</li>
        <li>晒单</li>
      </ul>
    </div>
    <div class="swiper-slide">
      <ul class="slide-list">
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/05c56c6c8a364dd8a928e19ec89e2729.jpeg"  />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/4cedf9351bba46c7ab513ef32f991eae.jpeg"  />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/bcab412a58aa4680bb5ea62dc378b8e6.jpg" />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/bed0ce2a994444789e85c14071b13c81.jpeg"  />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img class="img-zuo" src="https://yanxuan.nosdn.127.net/3d85cc49215744e5a11cba16fe2b51f1.png"   />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img class="img-zuo" src="https://yanxuan.nosdn.127.net/575ab1da45c247c9806c98c87789f4b3.png"   />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.foot-header
  width 100%
  height 100%
  .food-nav
    width 100%
    height 100%
    .foot-list
      width 100%
      height 80px
      line-height 80px
      font-size 30px
      overflow hidden
      display flex
      background-color #ffffff
      li
        margin-right 30px
        color #7F7F7F
        &:first-child
          color #B4282D
          margin-left 20px
          border-bottom 5px solid #B4282D
.swiper-slide
  width 100%
  height 100%
  .slide-list
    width 100%
    height 100%
    img 
        display block
    .img-zuo
        margin 0 auto
</style>
