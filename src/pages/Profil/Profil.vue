<template>
  <div class="prowarp">
    <div class="genheader">
      <div class="icon1" @click="$router.replace('/msite')">
        <i class="iconfont  icon-shouye"/>
      </div>
      <div class="titltwarp">
        网易严选
      </div>
      <div class="icon2">
        <i class="iconfont icon-search"/>
      </div>
      <div class="icon3">
        <i class="iconfont icon-gouwuche"/>
      </div>
    </div>
    <div class="loginwarp">
      <div class="logowarp">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="btnwarp">
        <div class="btn1">
          <i class="iconfont icon-shouji"/>
          <span>手机号码登录</span>
        </div>
        <div class="btn2">
          <i class="iconfont icon-icon"/>
          <span>邮箱账号登录</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
html,body
  overflow hidden
  height 100%

  .genheader
    background #fff
    z-index 20
    border-bottom 1px solid #ccc
    position fixed
    left 0rem
    top 0
    height 1.3rem
    width 100%
    .icon1
      margin-left .3rem
      height 1.3rem
      float left
      i
        font-size 40px
        line-height 1.3rem
    .titltwarp
      width 3.6rem
      height 100%
      text-align center
      line-height 1.3rem
      margin 0 auto
      font-size .6rem
    .icon2
      position absolute
      right 90px
      top 20px
      i
        font-size 45px
    .icon3
      position absolute
      right 19px
      top 20px
      i
        font-size 45px
  .loginwarp
    height 1062px
    margin-top 1.3rem
    .logowarp
      text-align center
      margin-top 213px
      height 76px
      img
        height 100%
</style>
