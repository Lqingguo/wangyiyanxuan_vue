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
      <div class="phonewarp"  v-if="isShow">
        <div class="logop">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="inputwarp">
          <div class="input1">
            <input type="text" placeholder="请输入手机号"  v-model="phone" @keyup.enter="isphone">
          </div>
          <div class="input2">
            <input type="text" placeholder="请输入短信验证码" v-model="code">
            <div class="input2w" @click="reqajax">获取验证码</div>
          </div>
          <div class="titleft">
            遇到问题？
          </div>
          <div class="titleword" @click="isShow = !isShow">
            使用邮箱密码登录
          </div>
        </div>
        <div class="btnwarp">
          <div class="btn1" @click="gologin">
            <span>登录</span>
          </div>
          <div class="btn2" @click="isShow =!isShow">
            <span >邮箱登录</span>
          </div>
        </div>
      </div>
      <div class="phonewarp" v-if="!isShow">
        <div class="logop">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="inputwarp">
          <div class="input1">
            <input type="text" placeholder="请输入邮箱账号" v-model="emails" >
          </div>
          <div class="input2">
            <input type="text" placeholder="请输入密码" v-model="password">
          </div>
          <div class="titleft">
            注册账号
          </div>
          <div class="titleword"  @click="isShow =!isShow">
            手机号登录
          </div>
        </div>
        <div class="btnwarp">
          <div class="btn1" @click="isRightEmail">
            <span>登录</span>
          </div>
          <div class="btn2" @click="isShow =!isShow">
            <span>手机验证码登录</span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  import {reqlogin,reqnote} from  '../../api/index'
  import {Toast} from 'mint-ui';
  export default {
    data(){
      return{
        isShow:true,
        phone:''  , //手机号
        code:''  ,//输入的验证码
        emails:'' , //输入的邮箱
        password:''  //输入的密码
      }
    },
    methods:{
      async reqajax(){
       const result = await reqnote(this.phone)
        if(result.code === 0){
          Toast('短信已发送')
        }

      },
     async gologin(){
       if(!/^1\d{10}/.test(this.phone)){
         Toast('请输入格式正确的手机号')
       }else{
         if(!/^\d{6}/.test(this.code)){
           Toast('请输入格式正确的验证码')
         }else{
           const result =await reqlogin(this.phone,this.code);
           if(result.code === 0){
             this.$router.replace('/msite')
           }
         }
       }
      },
      isRightEmail(){
       let ema =/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
       if(!ema.test(this.emails)){
         Toast({
           message:'邮箱格式错误',
         })
       }else {
         if(!/^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){6,}$/.test(this.password)){
           Toast('密码必须为六位数以上的数字字母组合')
         }
       }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

.prowarp
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

  .phonewarp
    height 1062px
    box-sizing border-box
    padding-top 1.3rem
    .logop
      margin-top 88px
      height 54px
      text-align center
      img
        height 100%

    .inputwarp
      box-sizing border-box
      height 300px
      width 100%
      margin-top 60px
      padding-left 40px
      padding-right 40px
      .input1
        height 70px
        width 100%
        margin-bottom 30px
        input
          width 100%
          height 100%
          outline none
          border 1px solid #fff
          border-bottom 2px solid #ccc
      .error1
        color red
        text-align center
      .input2
        height 70px
        width 100%
        margin-bottom 30px
        input
          width 100%
          height 100%
          outline none
          border 1px solid #fff
          border-bottom 2px solid #ccc
        .input2w
          color #ccc
          width 120px
          position absolute
          right 62px
          text-align center
          top 400px
          &.isrightphone
            color #000
      .titleft
        float left
        margin-top 20px
      .titleword
        float right
        margin-top 20px
    .btnwarp
      text-align center
      padding 0 0.6rem
      .btn1
        height 1.1rem
        color #fff
        text-align center
        line-height 1.1rem
        background #b4282d
        margin-bottom 20px
        border-radius 8px

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
        border-radius 8px
        background #fff
        margin-bottom 20px
        border 1px solid #b4282d
        span
          display inline-block
          font-size .45rem
        i
          font-size .4rem
</style>
