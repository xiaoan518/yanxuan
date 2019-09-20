<template>
    <div class="header">
      
      <div class="header-search" slot name="left" >
       
        <i class="iconfont icon-magnifier"></i>
        <span class="placeholder">搜索商品, 共22629款好物</span>
      </div>
    </div>
</template>

<script>
export default {
   
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
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
</style>
