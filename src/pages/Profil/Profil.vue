<template>
  <div class="prowarp">
    <div class="genheader">
      <div class="icon1" @click="$router.push('/')">
        <i class="iconfont  icon-shouye"/>
      </div>
      <div class="titltwarp">
        网易严选
      </div>
      <div class="icon2" @click="$router.replace('/search')">
        <i class="iconfont icon-search"/>
      </div>
      <div class="icon3">
        <i class="iconfont icon-gouwuche"/>
      </div>
    </div>
    <div class="loginwarp" v-if="isShow === 1">
      <div class="logowarp">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="btnwarp">
        <div class="btn1" @click="upDataisShow(2)">
          <i class="iconfont icon-shouji" />
          <span>手机号码登录</span>
        </div>
        <div class="btn2" @click="upDataisShow(3)">
          <i class="iconfont icon-icon"/>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="register">
        手机号快速注册>
      </div>
    </div>
    <PhoneLogin v-if="isShow === 2"/>
    <EmailLogin v-if="isShow === 3"/>
  </div>
</template>
<script>
  import PhoneLogin from '../../components/PhoneLogin/PhoneLogin.vue'
  import EmailLogin from '../../components/EmailLogin/EmailLogin.vue'
  export default {
    data(){
      return{
        isShow : 1 //控制让登录哪种方式显示  1 首页 2 电话 3 Email
      }
    }
    ,
    components:{
      PhoneLogin,
      EmailLogin
    },
    methods:{
      upDataisShow(index){
        if(this.$route.path !== '/profil'){
          console.log(111)
          this.isShow = 1
        }
        this.isShow = index
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
      font-size .6rem
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
  .loginwarp
    height 1062px
    box-sizing border-box
    padding-top 1.3rem
    .logowarp
      height 76px
      text-align center
      margin-top 136px
      img
        height 100%
    .btnwarp
      text-align center
      margin-top 200px
      padding 0 0.6rem
      .btn1
        height 1.1rem
        color #fff
        text-align center
        line-height 1.1rem
        background #b4282d
        margin-bottom 20px
        border-radius 3px
        i
          font-size .6rem
        span
          display inline-block
          font-size .45rem
      .btn2
        text-align center
        color #b4282d
        line-height 1.1rem
        height 1.1rem
        border-radius 3px
        background #fff
        margin-bottom 20px
        border 1px solid #b4282d
        span
          display inline-block
          font-size .45rem
        i
          font-size .4rem

    .register
      text-align center
</style>
