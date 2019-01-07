<template>
  <div class="list1">
    <div>
      <div v-for="(arr,index) in expertlist" :key="index">
        <div class="item" v-if="arr.style === 1">
          <div class="u-name">
            <div class="ava">
              <img v-lazy="arr.avatar" alt="">
            </div>
            <span class="xuanmei">{{arr.nickname}}</span>
          </div>
          <div class="title">{{arr.subTitle}}</div>
          <div class="imwarp">
            <img style="width: 100%;height: 100%" :src="arr.picUrl" alt="">
          </div>
          <span class="look">{{arr.readCount}}人看过</span>
        </div>
        <div class="items2" v-if="arr.style === 2" >
        <div class="info">
          <div class="u-name1">
            <div class="img2warp">
              <img v-lazy="arr.avatar" alt="">
            </div>
            <span>{{arr.nickname}}</span>
          </div>
          <div class="title1">
            {{arr.title}}
          </div>
          <div class="title2 ellipsis">{{arr.subTitle}}</div>
          <div class="look2">{{arr.readCount}}人看过</div>
        </div>
        <div class="leftimg">
          <img v-lazy="arr.picUrl" alt="aa">
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapGetters,mapState} from  'vuex'
  export default {
    data(){
      return{
        ispage:0,
        istrue:true
      }
    },
    mounted(){
      this.$store.dispatch('getexpertlist',{page:1,size:5,tabId:4});
      this._instail();
    },
    computed:{
      ...mapState({
        expertlist:state=>state.general.expertlist
      })
    },
    methods:{
      _instail(){
        if(!this.BScroll){
          this.BScroll = new BScroll('.list1',{
            click:true,
            pullUpLoad: {
              threshold:1000
            },
//            momentumLimitTime:200,
            momentum:false
          })
        }else {
            this.BScroll.on('pullingUp',()=>{
                if(this.istrue){
            this.istrue = false;
            setTimeout(()=>{
              this.ispage = this.ispage +1;
              this.$store.dispatch('getexpertlist',{page:this.ispage+1,size:5,tabId:4});
              this.BScroll.finishPullUp();
              this.istrue = true
            },1000)
                }
              }
            );
          this.BScroll.refresh()
        }
      }
    },
    watch:{
      expertlist(){
        this._instail();
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.list1
  position absolute
  left 0px
  width 100%
  height 100%
  .items2
    display flex
    box-sizing border-box
    padding: .32rem .3rem;
    width 100%
    margin-bottom 10px
    border-bottom 1px solid #ccc
    .info
      .title1
        width 320px
        height 100px
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical
        line-height: .75 rem
        margin-top 15px
        margin-right 10px
        font-size 30px
        text-overflow: ellipsis;
        overflow: hidden;
      .title2
        white-space nowrap
        line-height .6rem
        color #ccc
        font-size 26px
        margin-bottom 10px
        width 300px
      .u-name1
        line-height 1rem
        display inline-flex
        font-size .4rem
        .img2warp
          width 1rem
          height 1rem
          margin-right .26rem
          img
            width 100%
            height 100%

    .leftimg
      float right
      width 4rem
      height 4rem
      img
        width 100%
        height 100%

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
