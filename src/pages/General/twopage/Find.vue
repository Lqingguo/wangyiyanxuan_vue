<template>
  <div class="findwarp" >
    <ul class="navul">
      <!--class="active"-->
      <li @click="updataNumber(index)" :class="{active:isnumber === index}" v-for="(item,index) in navgeneral" :key="index">{{item.tabName}}</li>
    </ul>
    <div class="contenti">
      <Recommend v-if="isnumber === 0" :toarrlist="toarrlist"/>
      <Expert v-if="isnumber === 1"/>
    </div>
  </div>
</template>
<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    data(){
      return{
        isnumber:0,
      }
    }
    ,
    mounted(){

      this.$store.dispatch('getnavgeneral');
      this.$store.dispatch('getnavcontent')
    },
    computed:{
      ...mapState({
        navgeneral:state=>state.general.navgeneral,
        navcontent:state=>state.general.getnavcontent,

      }),
        ...mapGetters(['toarrlist'])
    },
    methods:{
      updataNumber(index){
        this.isnumber = index
      }
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
        margin-bottom 1.2rem

</style>
