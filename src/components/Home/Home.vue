<template>
  <div class="homewarp">
    <div class="homitem" v-for="(item,index) in homes.result" :key="index">
      <div class="hometitle">
        {{item.title}}
      </div>
      <img v-lazy="item.picUrl" alt="">
      <span>{{item.readCount}}人看过</span>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('gethome',{page:1,size:5,tabId:6})
    },
    computed:{
      ...mapState({
        homes:state=>state.general.homes
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .homewarp
    .homitem
      box-sizing border-box
      padding 20px 20px 20px 10px
      img
        width 100%
        height 100%
      span
        font-size 20px
        color #ccc
      .hometitle
        font-size 30px
        margin-bottom 10px

</style>
