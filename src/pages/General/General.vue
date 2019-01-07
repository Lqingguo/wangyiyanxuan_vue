<template>
  <div class="general">
    <div class="genheader">
      <div class="icon1" @click="$router.replace('/msite')">
        <i class="iconfont  icon-shouye"/>
      </div>
      <div class="titltwarp">
        <span :class="{active:isactive}" @click="updataActive1">发现</span>
        <span @click="updataActive2" :class="{active:!isactive}">甄选家</span>
      </div>
      <div class="icon2" @click="$router.replace('/search')">
        <i class="iconfont icon-search"/>
      </div>
      <div class="icon3" @click="$router.replace('/shopcart')">
        <i class="iconfont icon-gouwuche"/>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        isactive:true
      }
    },
    methods:{
      updataActive1(){
        this.isactive = true
        this.$router.replace('/general/find')
      },
      updataActive2(){
        this.isactive = false
        this.$router.replace('/general/selection')
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .general
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
          span
            font-size .4rem
            margin-left 20px
            &.active

              font-size .5rem
              color #b4282d
              font-weight 700

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
        .headerB
          b
          border-bottom .01rem solid #d9d9d9
          height .9rem
          width 100%
          .navul
            line-height .9rem
            display flex
            justify-content space-around
            li
              &.active
                color #B4282D
                border-bottom 2px solid #B4282D
</style>
