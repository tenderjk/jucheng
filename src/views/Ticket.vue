<template>
  <div id="ticket" class="container">
    <div class="header">
      <img class="bg_img" :src="backgroundImg" alt="">
      <mt-header title="演出详情">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button :class="follow==0?'icon-hert_o':'icon-iconhert'" class="iconfont icon-hert_o" slot="right">
        </mt-button>
        <mt-button class="iconfont icon-ArtboardCopy" slot="right">
        </mt-button>
      </mt-header>
      <div class="description">
        <div class="img">
          <img :src="backgroundImg" alt="">
        </div>
        <div class="content">
          <p>{{schedularName}}</p>
          <span>{{priceInterval}}</span>
        </div>
      </div>
    </div>
    <div class="second_desc">
      <div class="desc">
        <p class="time">{{timeInterval}}</p>
        <address>{{city_name}}&nbsp;|&nbsp;{{venue_name}}</address>
      </div>
      <div class="location">
        <span class="iconfont icon-iconlocaltion"></span>
      </div>
    </div>
    <div class="createCartButton">
      <div class="button">
        <p>开卡送￥{{returnMoney}}&nbsp;最高可省{{saveMoney}}</p>
        <span>立即开卡&gt;</span>
      </div>
    </div>
    <div class="discount">
      <div class="enter">
        <span>入场</span>
        <p>{{tips}}</p>
      </div>
      <div class="support">
        <span>支持</span>
        <p>{{supportData}}</p>
      </div>
    </div>
    <div class="tour">
      <h4 class="title">
        <p>巡演城市</p>
        <span>{{showtotal}}场&gt;</span>
      </h4>
      <ul>
        <li v-for="(item,index) in tourlist" :class="item.active_state==2?'active':item.active_state==1?'':'disabled'" :key="index">
          <p>{{item.city_name}}</p>
          <p>{{item.date}}</p>
        </li>
      </ul>
    </div>
    <div class="detail" v-html="detail">
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      backgroundImg: '',
      schedularName: '',
      priceInterval: '',
      follow: 0,
      timeInterval: '',
      venue_name: '',
      city_name: '',
      detail: '',
      returnMoney: '',
      saveMoney: '',
      supportData: '',
      tips: '',
      showtotal: '',
      show_id: '',
      venue_id: '',
      tourlist: []
    }
  },
  async mounted () {
    let followData = await axios('https://m.juooo.com/RestTicket/isFollowing?&version=5.1.4&referer=2&sch_id=' + this.$props.id)
    followData = followData.data.data
    this.follow = followData.is_following
    let ticketData = await axios('https://m.juooo.com/restTicket/getSchDetail?sch_id=' + this.$props.id)
    ticketData = ticketData.data.data
    this.backgroundImg = ticketData.scheInfo.pic
    this.schedularName = ticketData.scheInfo.schedular_name
    this.priceInterval = ticketData.scheInfo.price_interval
    this.show_id = ticketData.scheInfo.show_id
    this.venue_id = ticketData.scheInfo.venue_id
    this.timeInterval = ticketData.scheInfo.time_interval
    this.venue_name = ticketData.scheInfo.venue_name
    this.city_name = ticketData.scheInfo.city_name
    this.detail = ticketData.scheInfo.schedular_desc
    this.returnMoney = ticketData.pre.card_plus.buy_return_money
    this.saveMoney = ticketData.pre.card_plus.card_save_max_price
    this.supportData = ticketData.supportType[0]
    this.tips = ticketData.scheInfo.tips
    // https://m.juooo.com/restTicket/getTour?show_id=35563&venue_id=404&&version=5.1.4&referer=2
    let getTourData = await axios(`https://m.juooo.com/restTicket/getTour?&version=5.1.4&referer=2&show_id=${this.show_id}&venue_id=${this.venue_id}`)
    getTourData = getTourData.data.data
    this.showtotal = getTourData.showtotal
    this.tourlist = getTourData.tourlist
    console.log(getTourData)
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
@import url('//at.alicdn.com/t/font_1225232_gw3rzunsex5.css');
#ticket {
  .header {
    position: relative;
    overflow: hidden;
    img.bg_img {
      z-index: -1;
      position: absolute;
      left: 0;right: 0;top:0; bottom: 0;
      margin: auto;
      transform: scale(1.1);
      -webkit-filter: blur(0.1rem); /* Chrome, Opera */
                -moz-filter: blur(0.1rem);
                  -ms-filter: blur(0.1rem);
                      filter: blur(0.1rem);
    }
    .description {
      z-index: 10;
      margin-top: 0.1rem;
      color: #fff;
      text-align: left;
      @include flexbox();
      @include rect(100%,auto);
      justify-content: space-around;
      align-items: center;
      .img {
        @include rect(0.93rem,1.28rem);
        @include flex(0 0 0.93rem);
        img {
          display: block;
          @include rect(100%,100%);
        }
      }
      .content {
        height: 1.28rem;
        @include flex(0 0 1.88rem);
        @include flexbox();
        flex-direction: column;
        justify-content: space-around;
        font: 600 0.14rem/1.2 "";
      }
    }
    @include rect(auto,2rem);
      .mint-header {
      background: none;
      @include rect(auto,0.4rem);
      font-size: 0.18rem;
      button {
        margin-left: 0.1rem;
      }
    }
  }
  .second_desc {
    @include flexbox();
    @include rect(auto,auto);
    margin:0.3rem 0.1rem 0;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    .location {
      @include flex(0 0 0.34rem);
      font-size: 0.25rem;
      span {
        font-size: 0.25rem;
      }
    }
    .desc {
      font-weight: bold;
      @include flex(1);
      address {
        padding-right: 0.5rem;
        margin-top: 0.1rem;
      }
    }
  }
  .createCartButton {
    border-bottom: 0.15rem solid #e5e5e5;
    .button {
      border-radius: 0.1rem;
      color: #fff;
      margin: 0.2rem 0.1rem;
      padding: 0.1rem;
      @include flexbox();
      @include rect(auto,0.4rem);
      justify-content: space-between;
      align-items: center;
      background: none;
      border: none;
      background-image: linear-gradient(-50deg,#ff4d4a,#ff9a34),linear-gradient(#ff6743,#ff6743);
      span {
        font-size: 0.12rem;
      }
    }
  }
  .discount {
    padding:0 0.1rem;
    border-bottom: 0.15rem solid #e5e5e5;
    .enter,.support {
      font: 0.13rem/0.5rem "";
      height: 0.5rem;
      @include flexbox();
      color:#999;
      span {padding-right: 0.1rem;}
      border-bottom:0.01rem solid #e5e5e5
    }
    .enter p {
      font-size: 0.12rem;
      color: #232323;
    }
    .support p {
      font-size: 0.11rem;
    }
  }
}
</style>
