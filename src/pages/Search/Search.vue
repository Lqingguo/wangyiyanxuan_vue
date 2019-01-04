<template>
  <div class="searwarp">
    <div class="searheader">
        <div class="searleft">
          <i class="iconfont icon-search"/>
          <input type="text"  class="inputtext" placeholder="严选开年特惠 最高直降1399元" v-model="searchBox">
        </div>
        <div class="searright" @click="replaee">
          取消
        </div>
    </div>
    <ul class="inputwarp" v-if="items.length">
      <li v-for="(item,index) in items" :key="index">
        {{item}}
      </li>
    </ul>
    <div class="searcontent">
      <div class="seartitle">热门搜索</div>
      <ul class="searlist">
        <li>爆款 行李箱</li>
        <li>保暖内衣</li>
        <li>直降1349</li>
        <li>拖鞋9.9元起</li>
        <li>围巾5折起</li>
        <li>丁磊推荐</li>
        <li>零食买4免1</li>
        <li>羽绒服五折起</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
      data(){
        return{
          searchBox:'',
          flag : true
        }
      },
      watch:{
        searchBox(){
          //函数防抖
            if(this.flag){
              this.flag = false
              setTimeout(()=>{
                let arra = this.searchBox
                this.$store.dispatch('getSearchvalue',{keywordPrefix:arra})
                this.flag = true
              },100)
            }
        }
      },
    computed:{
      ...mapState({
        items: state=> state.general.items
      })
    },
    methods:{
        replaee(){
          this.$router.replace('/msite')
          this.searchBox = ''
        }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .searwarp
      .searheader
        display inline-block
        height 74px
        padding 0 20px
        float left
        .searleft
          text-align center
          display inline-block
          width 530px
          margin-top 10px
          height 47px
          i
            line-height 47px
            font-size 36px
          .inputtext
            box-sizing border-box
            padding-left 40px
            opacity .5
            border-radius 2px
            background #B5B6BC
            width 480px
            height 47px
            border 1px solid #ccc
            outline none
        .searright
          float right
          margin-top 20px
          margin-left 20px

      .searcontent
        box-sizing border-box
        padding-top 100px
        .seartitle
          margin-left 20px
          font-size 26px
          color #ccc
        .searlist
          margin-top 20px
          height 200px
          width 100%
          li
            border 1px solid #b4282d
            float left
            margin-left 20px
            margin-right 30px
            text-align center
            line-height 40px
            height 40px
            border-radius 10px
            margin-bottom 20px
            padding 0 20px

      .inputwarp
        box-sizing border-box
        position absolute
        left 0px
        top 74px
        bottom 0px
        right 0px
        width 100%
        background #f4f4f4
        li
          height 1.2rem
          font-size .3773rem
          border-bottom 2px solid #ccc
          background #fff
          padding-left 40px
          line-height 1.6rem


</style>
