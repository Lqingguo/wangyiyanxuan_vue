<template>
  <div id="warp">
    <div class="header">
    <div id="header-top">
      <div class="logo">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="">
      </div>
      <div class="search" @click="$router.replace('/search')">
        <i class="iconfont icon-search"/>
        <span>搜索商品，共19966件好物</span>
      </div>
      <div class="login" @click="$router.replace('/profil')">登录</div>
    </div>
    <div class="nav_list">
      <ul class="ullist" v-if="msitelist.length">
        <!--active-->
        <li v-for="(nav,index) in msitelist" :class="{active:index === showindex}" @click="updataindex(index)">
          {{nav.name}}
        </li>
      </ul>
    </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-if="slideshow.length"  v-for="(item,index) in slideshow" :key="index">
          <img :src="item.picUrl" alt="index">
        </div>
      </div>
    </div>
    <ul class="pledges">
        <li>
          <i class="iconfont icon-sel"></i>
          <span>网易自营品牌</span>
        </li>
        <li>
          <i class="iconfont icon-sel"></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i class="iconfont icon-sel"></i>
          <span>48小时快速退款</span>
        </li>
    </ul>
    <div class="contnet">
      <ul>
        <li v-if="navlist.kingKongList.length" v-for="(item,index) in navlist.kingKongList" :key="index">
          <img :src="item.picUrl" alt="">
          <span>{{item.text}}</span>
        </li>
      </ul>
    </div>
    <div class="exclusive">
      <div class="extop">
        - 新人专享礼 -
      </div>
      <div class="excontent">
        <div class="exleft">
          <div class="title">
            新人专享礼包
          </div>
          <div class="imgwarp">
            <div class="imgdiv">
              <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="">
            </div>
          </div>
        </div>
        <div class="exright">
          <div class="exRt">
            <div style="font-size: .42667rem;display: inline-block">福利社</div>
            <div>今日特价</div>
            <div class="reduce">
              <div style="font-size: .32rem;margin-top: 8px">￥92</div>
              <div style="text-decoration:line-through;margin-top:10px;font-size: .26667rem">￥120</div>
            </div>
            <div class="img2warp">
              <img src="http://yanxuan.nosdn.127.net/21d9f858fe4b1e2d37ce09c1c399a6b2.png?imageView&thumbnail=200x200&quality=75" alt="">
            </div>
          </div>
          <div class="exRb">
            <div style="font-size: .42667rem;display: inline-block">新人拼团</div>
            <div class="exRbtit">1元起包邮</div>
            <div class="reduce2">
              <div style="font-size: .32rem;margin-top: 8px">￥1</div>
              <div style="text-decoration:line-through;margin-top:10px;font-size: .26667rem">￥14</div>
            </div>
            <div class="img1warp">
              <img src="http://yanxuan.nosdn.127.net/d8d2a808ae9abdcdc337f521df0254ef.png?imageView&thumbnail=200x200&quality=75" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        showindex:0
      }
    }
    ,
    mounted(){
      this.$store.dispatch('getmsitelist',()=>{
        this.$nextTick(()=>{
          new BScroll('.nav_list',{
            scrollX: true,
            click: true
          })
        })
      })
      this.$store.dispatch('getslideshow',()=>{
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            effect:'fade',
            loop:true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      })
      this.$store.dispatch('getnavlist')
    },
    computed:{
      ...mapState({
        msitelist:state=>state.msite.msitelist,
        slideshow:state=>state.msite.slideshow,
        navlist : state=>state.msite.navlist
      })
    },
    methods:{
      updataindex(index){
        this.showindex = index
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #warp
    background #eee
    height 100%
    margin-bottom 1.3rem
    .header
      position fixed
      left 0rem
      top 0rem
      background #fff
      height 126px
      z-index 10
      border-bottom 1px solid #fff
      #header-top
        background #fff
        height 75px
        box-sizing border-box
        padding .2rem .4rem
        .logo
          width 1.84rem
          margin-right: .26667rem
          float left
        .search
          border-radius 10px
          border 1px solid #ccc
          height 46px
          float left
          width 330px
          background #eee
          margin-right 30px
          margin-left 30px
          position relative
          span
            display inline-block
            position absolute
            right 6px
            top 11px
          i
            font-size 40px
        .login
          float left
          text-align center
          height .53333rem
          width .98667rem
          line-height .53333rem
          border 1px solid red
          border-radius .10667rem
          margin-top 8px

      .nav_list
        background #fff
        height 53px
        width 99%
        display flex
        .ullist
          margin-bottom 10px
          display flex
          li
            width 51px
            display inline-block
            padding: 0 .21333rem;
            line-height: .8rem;
            font-size: .37333rem;
            text-align: center;
            margin-left: .26667rem;
            &.active
              border-bottom 2px solid red
              color red
    .swiper-container
      margin-top 126px
      background #fff
      height 380px
      overflow hidden
      .swiper-wrapper
        height 100%
        width 800%
        .swiper-slide
          width 12.5%
          height 100%
          float left
          img
            width 100%
            height 100%
    .pledges
      background #fff
      height .96rem
      width 100%
      display flex
      align-items center
      li
        float left
        color #B4282D
        margin-left 31px
    .contnet
      background #fff
      height 340px
      width 100%
      ul
        width 100%
        li
          margin-bottom .12rem
          width 1.46667rem
          height 2.08rem
          float left
          margin .13333rem .266667rem 0
          position relative
          img
            width 93px
            height 93px
          span
            text-align center
            display inline-block
            width 99px


    .exclusive
      position relative
      background #fff
      margin-top .26667rem
      margin-bottom .26667rem
      padding-bottom .4rem
      height 476px
      clearFix()
      .extop
        height 1.2rem
        width 100%
        line-height 1.2rem
        text-align center
      .excontent
        clearFix()
        width 100%
        padding-left .4rem
        .exleft
          width 4.57333rem
          height 5.78667rem
          background #F9E9CF
          border-radius .05333rem
          margin-right .05333rem
          float left
          .title
            font-size .42667rem
            padding .4rem 0 0 .4rem
          .imgwarp
            margin .49333rem auto
            width 3.44rem
            height 3.42667rem
            .imgdiv
              width 3.44rem
              height 3.42667rem
              img
                width 100%
                height 100%
        .exright
          float left
          .exRt
            box-sizing border-box
            padding .26667rem 0 0 .4rem
            width 4.57333rem
            height 2.86667rem
            margin-bottom .05333rem
            background #FBE2D3
            .reduce
              width 1.06667rem
              height 1.06667rem
              opacity .8
              color #fff
              background #F59524
              border-radius 50%
              text-align center
              position absolute
              right 50px
              top 87px
            .img2warp
              width 2.66667rem
              height 2.66667rem
              position absolute
              right 0px
              top: 106px
              img
                width 100%
                height 100%

          .exRb
            position relative
            box-sizing border-box
            padding .26667rem 0 0 .4rem
            width 4.57333rem
            height 2.86667rem
            margin-bottom .05333rem
            background #FFECC2
            .exRbtit
              color #fff
              position absolute
              background #CBB693
              border-radius .05333rem
              padding 0 .13333rem
              height .42667rem
              line-height .42667rem
              display inline-block
              left 13px
              bottom 99px
            .reduce2
              width 1.06667rem
              height 1.06667rem
              opacity .8
              color #fff
              background #F59524
              border-radius 50%
              text-align center
              position absolute
              right 27px
              top 0px
            .img1warp
              width 2.66667rem
              height 2.66667rem
              position absolute
              right -15px
              top: 28px
              img
                width 100%
                height 100%

</style>
