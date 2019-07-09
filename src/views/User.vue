<template>
  <div id="user" class="container">
    <div class="top">
      <div class="userhead">
        <img src="../assets/logo-user.png" alt="">
        <div class="message">
          <p>{{username}}</p>
          <p>id: 无法获取的数据</p>
        </div>
      </div>
      <div class="card">
        <div class="card-l">
          <img src="../assets/icon-cardLogo.png" alt="">
          <p>开通橙PLUS卡，限时送100元</p>
        </div>
        <div class="card-r">
          <p>尊享多项特权</p>
        </div>
      </div>
    </div>
    <div class="user-own">
      <ul>
        <li>
          <p>0.00元</p>
          <p>余额</p>
        </li>
        <li>
          <p>8分</p>
          <p>积分</p>
        </li>
        <li>
          <p>6张</p>
          <p>优惠券</p>
        </li>
      </ul>
    </div>
    <div class="listContain">
      <div class="order list">
        <span class="iconfont icon-order"></span>
        <p>我的订单</p>
      </div>
      <div class="ewallet list">
        <span class="iconfont icon-piaojia1"></span>
        <p>我的票夹</p>
      </div>
      <div class="cardwallet list">
        <span class="iconfont icon-qiabao1"></span>
        <p>我的卡包</p>
      </div>
      <div class="myfollow list" @click="jump('/user/follow')">
        <span class="iconfont icon-guanzhu"></span>
        <p>我的关注</p>
      </div>
      <div class="address">
        <span class="iconfont icon-dizhi"></span>
        <p>收货地址</p>
      </div>
      <div class="mymsg list">
        <span class="iconfont icon-xiaoxi"></span>
        <p>我的消息</p>
      </div>
      <div class="comment">
        <span class="iconfont icon-yijianfankui"></span>
        <p>意见反馈</p>
      </div>
      <div class="connect list">
        <span class="iconfont icon-kefu"></span>
        <p>客服电话</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.login.loginStatus !== true) {
        next('/login')
      } else {
        next()
      }
    })
  },
  async mounted () {
    // let data = await axios.get('https://m.juooo.com/Myjuooo/mycollection?p=1')
    // data = data.data
    // axios({
    //   url: 'https://m.juooo.com/Myjuooo/mycollection?p=1',
    //   method: 'get',
    //   withCredentials: true
    // })
  },
  computed: {
    username () {
      return this.$store.state.login.loginName
      // return sessionStorage.getItem('username')
    }
  },
  methods: {
    jump (url) {
      this.$router.push({ path: url })
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
@import url('//at.alicdn.com/t/font_1225232_sw64rvhe16.css');
  #user {
    .top {
      position: relative;
      @include rect(100%,1.8rem);
      background: url('../assets/integral.jpg');
      .userhead {
        text-align: left;
        @include flexbox();
        @include rect(100%,auto);
        align-items: center;
        img {
          display: block;
          @include rect(0.45rem,0.45rem);
          border-radius: 50%;
          background: #fff;
          margin: 0.2rem 0.15rem;
        }
      }
      .card {
        padding:0.1rem 0.15rem;
        background: url('../assets/pic_plusCard.png') no-repeat;
        background-position: center 0;
        background-size: cover;
        position: absolute;
        left: 0.15rem;right: 0.15rem;
        margin: auto;
        bottom: 0;height: 0.7rem;
        border-radius: 0.08rem 0.08rem 0 0;
        @include flexbox();
        justify-content: space-between;
        .card-l {
          text-align: left;
          img {
            @include rect(1.25rem,0.28rem);
          }
          p {
            margin-top: 0.05rem;
            color: #d8c9a3;
            font-size: 0.1rem;
            font-weight: bold;
          }
        }
        .card-r {
          font-weight: bold;
          color: #d8c9a3;
          height: 0.2rem;
          line-height: 0.2rem;
          font-size: 0.12rem;
          border-radius: 0.1rem;
          padding:0 0.1rem;
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
    .user-own {
      ul {
        @include flexbox();
        padding: 0.1rem 0;
        justify-content: space-around;
        align-items: center;
        li {
          p:first-child {
            color: #ff7919;
            font-size: 0.16rem;
          }
          p:first-child:first-letter {
            font-size: 0.2rem;
            font-weight: bold;
          }
          p {
            font-size: 0.1rem;
          }
        }
      }
    }
    .listContain {
      &:before {
        content: '';
        display: table-cell;
      }
      background: #f1efef;
      >div {
        background: #fff;
        @include rect(100%,0.36rem);
        display: flex;
        align-items: center;
        span {
          @include rect(.3rem,.3rem);
          font-size: .15rem;
          &:before {
            line-height: .3rem;
          }
         }
      }
      .list {
        margin-top: 0.08rem;
      }
    }
  }
</style>
