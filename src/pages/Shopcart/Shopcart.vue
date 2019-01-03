<template>
  <div class="cartwarp">
    <div class="cartheader" >
      <span>购物车</span>
      <span class="lingjuan">领劵</span>
    </div>
    <div class="warpcart">
      <ul class="cartlist">
        <li>30天无忧退货</li>
        <li>48小时快速退款</li>
        <li>满88元免邮费</li>
      </ul>
      <div class="contatin">
        <div class="imgcwarp">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
        </div>
      </div>
      <div class="btn1" @click="$router.replace('/profil')">登录</div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartwarp
    .cartheader
      background #fff
      position fixed
      left 0px
      top 0px
      width 100%
      z-index 10
      height 1.17333rem
      padding 0 .4rem
      line-height 1.17333rem
      text-align center
      border-bottom 1px solid #ccc
      font-size 31px
      .lingjuan
        position absolute
        right 80px
        top 0px
        font-size 26px
        color red
    .warpcart
      width 100%
      height 100%
      background #ccc
      position absolute
      left 0px
      top 0px
      bottom 0px
      right 0px
      margin auto

      .cartlist
        display flex
        justify-content space-around
        margin-top  1.3rem
      .contatin
        position absolute
        left 0px
        top 0px
        bottom 0px
        right 0px
        margin auto
        display flex
        justify-content center
        align-items center
      .btn1
        position absolute
        left 113px
        top 700px
        width 6.4rem
        text-align center
        height 1.22667rem
        font-size .5rem
        color #fff
        background #b4282d
        border-radius .04rem
        line-height 1.22667rem
</style>
