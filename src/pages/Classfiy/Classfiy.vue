<template>
  <div id="classfiy">
    <div class="classfiyh">
      <div class="searchfiyh">
        <i class="iconfont icon-search"/>
        <span>搜索商品，共1008件好物</span>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <ul>
          <li :class="{active:index ===cateindex }" v-for="(listmessage,index) in listmessages" :key="index" @click="updatacateindex(index)">
            {{listmessage.name}}
          </li>
        </ul>
      </div>
      <div class="right" v-if="listmessages.length">
        <div class="rightwarp">
          <div class="rightT">
            <img  :src="listmessages[cateindex].bannerUrl" alt="">
          </div>
          <div class="rightB">
            <ul class="rightlist">
              <li v-for="(cata,index) in listmessages[cateindex].subCateList">
                <div class="imgdi">
                  <img :src="cata.wapBannerUrl" alt="">
                </div>
                <div>{{cata.name}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        cateindex:0
      }
    },
    mounted(){
      this.$store.dispatch('getlistmessage',()=>{
        new BScroll('.left',{
          click: true
        })
      });
      this.$store.dispatch('getcurrentcate')
    },
    computed:{
      ...mapState({
        listmessages:state=>state.reqprefect.listmessages,
      })
    },
    methods:{
      updatacateindex(index){
        this.cateindex = index
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/mixins.styl'
    #classfiy
      .classfiyh
        position fixed
        left 0px
        top 0px
        width 100%
        z-index 10
        background #fff
        box-sizing border-box
        height 1.173rem
        padding-left 40px
        padding-right 40px
        padding-top 10px
        border-bottom 1px solid #CCC
        .searchfiyh
          height .74667rem
          justify-content center
          font-size .3733rem
          background #ededed
          border-radius .10667rem
          span
            color #666
            line-height .74667rem
          i
            color #666
            font-size 32px
            line-height .74667rem
      .content
        margin-top 1.173rem
        display flex
        width 100%
        height 100%
        position relative
        .left
          float left
          width 2.16rem
          height: 15.5rem
          overflow hidden
          position fixed

          border-right 1px solid #ccc
          ul
            padding-bottom 0.3rem
            width 100%
            li
              display inline-block
              height .66667rem
              margin-top .53333rem
              width 100%
              text-align center
              &.active
                color red
                border-left 4px solid red
        .right
          margin-left 2.16rem
          height 1040px
          padding-left:.28rem;
          padding-right:.28rem;
          .rightwarp
            margin-left 10px
            .rightT
              height 2.56rem
              width 450px
              img
                width 100%
                height 100%
            .rightB
              width 450px
              .rightlist
                clearFix()
                li
                  float left
                  height 184px
                  width 1.92rem
                  margin-right .40333rem
                  .imgdi
                    width 1.92rem
                    height 1.92rem
                    img
                      width 100%
                      height 100%


</style>
