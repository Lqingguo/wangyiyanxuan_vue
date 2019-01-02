<template>
  <div class="findwarp">
    <ul class="navul">
      <!--class="active"-->
      <li  v-for="(item,index) in navgeneral" :key="index">{{item.tabName}}</li>
    </ul>
    <div class="contenti">
      <div class="item">
        <div class="u-name">
              <div class="ava">
                <img src="https://yanxuan.nosdn.127.net/a911393b603a87e74824290f54b37b24.png?imageView&quality=65&thumbnail=56y56" alt="">
              </div>
              <span class="xuanmei">选妹</span>
        </div>
        <div class="title">新年新气象</div>
        <div class="imwarp">
          <img style="width: 100%;height: 100%" src="https://yanxuan.nosdn.127.net/d4b80051264bd13dac9e9f07a77f46ff.jpg?imageView&quality=65&thumbnail=690y376" alt="">
        </div>
        <span class="look">49.2人看过</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){

      this.$store.dispatch('getnavgeneral');
      this.$store.dispatch('getnavcontent')
    },
    computed:{
      ...mapState({
        navgeneral:state=>state.general.navgeneral,
        navcontent:state=>state.general.getnavcontent
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .findwarp
      z-index 10
      margin-top 1.3rem
      position relative
      .navul
        background #fff
        box-sizing border-box
        list-style none
        border-bottom 1px solid  #d9d9d9
        line-height .9rem
        display flex
        height .9rem
        top 84px
        position fixed
        width 100%
        border-bottom 1px solid #ccc
        justify-content space-around
        li
          &.active
            color #B4282D
            border-bottom 2px solid #B4282D
      .contenti
        z-index -1
        margin-top 164px
        .item
          border 1px solid #ccc
          margin: .2rem 0;
          padding: .36rem .3rem;
          box-sizing border-box
          width 100%
          .u-name
            display inline-flex
            margin-bottom .24rem
            font-size .36rem
            line-height .4rem
            white-space: nowrap;
            vertical-align baseline
            .ava
              width .7rem
              height .7rem
              border-radius 50%
              overflow: hidden;
              display inline-block
              box-sizing: border-box;
              img
                width 100%
                height: 100%
            .xuanmei
              line-height .7rem
              display inline-block

          .imwarp
            margin-top 10px
            width: 9.5rem
            height 5.6rem
          .look
            margin-top 10px
            color #ccc
            margin-left 10px
</style>
