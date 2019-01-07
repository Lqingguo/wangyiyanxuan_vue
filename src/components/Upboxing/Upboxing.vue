<template>
  <div class="boxwarp">
    <div class="boxtop">
      <div class="boxtitle1">{{boxs.subtitle}}</div>
      <div class="boxtitle2">“{{boxs.title}}”</div>
    </div>
    <div class="boxbottom">
        <div class="boxtitle3">
          TA们的严选生活
        </div>
        <ul class="bottomlist">
          <li @click="updatawhether(1)" :class="{active:whetherShow === 1}">最新</li>
          <li @click="updatawhether(2)" :class="{active:whetherShow === 2}">本月最热</li>
          <li @click="updatawhether(3)" :class="{active:whetherShow === 3}">晒单合辑</li>
        </ul>
    <ul class="imglist" >
      <li class="imgli" v-for="(item,index) in threes.topicList" v-if="threes.topicList.length">
        <div class="imgs" >
          <img v-lazy="item.bannerInfo.picUrl" :style="{width:item.bannerInfo.width/4+'px'}" alt="as"  >
        </div>
        <div class="atitle">
          招财喵喵好可爱，立刻再买一套送朋友
        </div>
        <div class="imgbottom">
          <span class="leftbud"></span>
          <span class="middletitle"></span>
          <span class="like">
              <i class="iconfont icon-dianzan1"/>
            </span>
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        whetherShow: 1
      }
    },
    methods:{
      updatawhether(index){
        this.whetherShow = index
        this.$store.dispatch('getbothree',{page:1,size:20,type:index});
      },
    },
    mounted(){
      this.$store.dispatch('getboxing');
      this.$store.dispatch('getbothree',{page:1,size:20,type:this.whetherShow});
    },
    computed:{
      ...mapState({
        boxs:state=>state.general.boxs, //ta严选生活上边的
        threes:state=>state.general.threes   //下边三个
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .boxwarp
    .boxtop
      text-align center
      padding-top .2rem
      padding-bottom .46667rem
      margin-bottom 1rem
      background #fff
      .boxtitle1
        font-size 20px
        color #ccc
        margin-bottom .42rem
      .boxtitle2
        font-size 26px
        color black
    .boxbottom
      text-align center
      .boxtitle3
        font-weight 700
        font-size 30px
      .bottomlist
        margin-top 50px
        display flex
        justify-content space-around
        li
          height 60px
          width 150px
          text-align center
          line-height 60px
          border-radius 6px
          color #ccc
          background #f4f4f4
          &.active
            background #ccc
            color black
            font-weight 700


      .imglist
        column-width:250px;
        column-gap: 5px;
        margin-top 30px
        .atitle
          float left





</style>
