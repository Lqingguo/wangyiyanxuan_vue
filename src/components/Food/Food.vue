<template>
  <nav id="nav" v-if="$route.path !== '/profil'">
    <div @click="$router.replace('/msite')" :class="{active:isCurrent('/msite')}">
      <i class="iconfont icon-shouye" />
      <span>首页</span>
    </div>
    <div @click="$router.replace('/classfiy')" :class="{active:isCurrent('/classfiy')}">
      <i class="iconfont icon-classify_icon"/>
      <span>分类</span>
    </div>
    <div @click="$router.replace('/general')" :class="{active:isCurrent('/general')||isCurrent('/general/find') || isCurrent('/general/selection')}">
      <i class="iconfont icon-zhaopian"/>
      <span>识物</span>
    </div>
    <div @click="$router.replace('/shopcart')" :class="{active:isCurrent('/shopcart')}">
      <i class="iconfont icon-gouwuche"/>
      <span>购物车</span>
    </div>
    <div @click="$router.replace('/profil')" >
      <i class="iconfont icon-geren"/>
      <span>个人</span>
    </div>
  </nav>
</template>
<script>
  export default {
    methods:{
      isCurrent(path){
        return this.$route.path === path
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/mixins.styl'
#nav
  background #fff
  z-index 10
  border-top 1px solid #eee
  position fixed
  left 0
  bottom 0
  width 100%
  height 1.3rem
  display flex
  justify-content center
  align-content center
  div
    margin-right 10px
    display flex
    line-height 1.30667rem
    text-align center
    flex-direction column
    align-items center
    flex 1
    &.active
      color red
    i
      width: .43333rem;
      height: .43333rem;
      font-size 0.5rem







</style>
