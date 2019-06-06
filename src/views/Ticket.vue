<template>
  <div id="ticket" class="container">
    <div class="header">
      <img class="bg_img bg_last_img" :src="backgroundImg" alt="">
      <img class="bg_img blur" :src="backgroundImg" alt="">
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
        <span class="count"><span>{{showtotal}}</span>场&gt;</span>
      </h4>
      <ul>
        <li v-for="(item,index) in tourlist" :class="item.active_state==2?'active':item.active_state==1?'':'disabled'" :key="index">
          <p class="city">{{item.city_name}}</p>
          <p class="date">{{item.date}}</p>
        </li>
      </ul>
    </div>
    <div class="detail">
      <h4 class="title">演出介绍</h4>
      <div class="content" :class="{less:!showmore}" v-html="detail"></div>
      <div class="loadmore" v-if="!showmore"></div>
      <div class="loadmoreword" v-if="!showmore" @click="showmore=true">显示更多</div>
    </div>
    <div class="notice">
      <div class="title">温馨提示</div>
      <div class="content">
        <span @click="popupVisible=true" v-for="(item,index) in noticeData" :key="index">{{item.title}}</span>
      </div>
    </div>
    <mt-popup position="bottom" v-model="popupVisible">
      <div class="title">
        <p>温馨提示</p>
        <span @click="popupVisible=false" class="iconfont icon-close"></span>
        </div>
      <div class="content" v-for="(item,index) in noticeData" :key="index">
        <h4>{{item.title}}</h4>
        <p>{{item.desc}}</p>
      </div>
    </mt-popup>
    <div class="recommandContain">
      <recommand :recommandList="showList"/>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import recommand from '@/components/ticket/recommand'
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
      tourlist: [],
      showmore: false,
      noticeData: [],
      popupVisible: false,
      city_id: '',
      cate_parent_id: '',
      showList: []
    }
  },
  components: {
    recommand
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
    this.city_id = ticketData.scheInfo.city_id
    this.cate_parent_id = ticketData.scheInfo.cate_parent_id
    this.detail = ticketData.scheInfo.schedular_desc
    this.returnMoney = ticketData.pre.card_plus.buy_return_money
    this.saveMoney = ticketData.pre.card_plus.card_save_max_price
    this.supportData = ticketData.supportType[0]
    this.tips = ticketData.scheInfo.tips
    this.noticeData = ticketData.notice
    // https://m.juooo.com/restTicket/getTour?show_id=35563&venue_id=404&&version=5.1.4&referer=2
    let getTourData = await axios(`https://m.juooo.com/restTicket/getTour?&version=5.1.4&referer=2&show_id=${this.show_id}&venue_id=${this.venue_id}`)
    getTourData = getTourData.data.data
    this.showtotal = getTourData.showtotal
    this.tourlist = getTourData.tourlist
    let showList = await axios(`https://m.juooo.com/Search/getShowList?category=${this.cate_parent_id}&city_id=${this.city_id}&version=5.1.4&referer=2`)
    showList = showList.data.data.list
    this.showList = showList
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
@import url('//at.alicdn.com/t/font_1225232_ho1rmlryut5.css');
#ticket {
  .header {
    position: relative;
    overflow: hidden;
    img.bg_last_img {
      z-index: -2;
      transform: scale(1.4);
      overflow: hidden;
    }
    img.bg_img {
      position: absolute;
      left: 0;right: 0;top:0; bottom: 0;
      width: 100%;
      margin: 0;
      overflow: hidden;
    }
    img.blur {
      z-index: -1;
      transform: scale(1.4);
      -webkit-filter: blur(0.05rem); /* Chrome, Opera */
      -moz-filter: blur(0.05rem);
      -ms-filter: blur(0.05rem);
      filter: blur(0.05rem);
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
  .tour {
    font-weight: bold;
    padding-bottom: 0.2rem;
    border-bottom: 0.15rem solid #e5e5e5;
    .active {
      color: #ff6743;
      border: 0.01rem solid #ff6743;
    }
    .disabled {
      color: #ccc;
      border: 0.01rem solid #ccc;
    }
    .title {
      @include flexbox();
      padding:0 0.1rem;
      @include rect(100%,0.6rem);
      justify-content: space-between;
      align-items: center;
      p {font-size: 0.18rem;}
      span.count {
        font-size: 0.1rem;
        span {color: #ff6743;}
      }
    }
    ul {
      @include flexbox();
      margin:0.05rem 0.1rem;
      overflow: auto;
      li {
        border-radius: 0.05rem;
        @include flex(0 0 0.8rem);
        margin-right: 0.2rem;
        height: 0.6rem;
        @include flexbox();
        flex-direction: column;
        justify-content: center;
        border: 0.01rem solid #e5e5e5;
        .city {font-size: 0.14rem;}
        .date {font-size: 0.12rem;}
      }
    }
  }
  .detail {
    border-bottom: 0.15rem solid #e5e5e5;
    position: relative;
    overflow: hidden;
    padding: 0.2rem 0;
    text-align: left;
    img {
      @include rect(100%,100%);
    }
    .title,.content {
      margin: 0 0.1rem;
      word-break: break-all;
    }
    .title {
      font-size: 0.18rem;
      margin-bottom: 0.2rem;
    }
    .less {
      height: 4rem;
    }
    .loadmore {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.5rem;
      background: rgba(255, 255, 255, 0.9);
      -webkit-filter: blur(.05rem); /* Chrome, Opera */
      -moz-filter: blur(0.05rem);
      -ms-filter: blur(0.05rem);
      filter: blur(.05rem);
    }
    .loadmoreword {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.5rem;
      color: #ff6743;
      line-height: 0.5rem;
      text-align: center;
    }
  }
  .notice {
    padding: 0.2rem 0;
    text-align: left;
    border-bottom: 0.15rem solid #e5e5e5;
    .title {
      margin: 0 0.1rem;
      font-weight: bold;
      font-size: 0.18rem;
    }
    .content {
      @include flexbox();
      @include rect(100%,0.3rem);
      justify-content: space-around;
      align-items: center;
      padding: 0.2rem 0.1rem 0;
      font-size: 0.12rem;
      span {
        position: relative;
        &:after {
          content: "";
          position: absolute;
          width: 0.05rem;
          height: 0.05rem;
          border-radius: 50%;
          top: 0;bottom: 0;left:-0.1rem;
          margin: auto;
          background: #999;
        }
      }
    }
  }
  .mint-popup{
    padding: 0.1rem;
    width: 100%;
    text-align: left;
    border-radius: 0.08rem 0.08rem 0 0;
    .title {
      font-weight: bold;
      font-size: 0.18rem;
      margin-bottom: 0.1rem;
      @include flexbox();
      @include rect(100%,auto);
      justify-content: space-between;
      align-items: center;
      span {color: #999;}
    }
    .content {
      margin: 0 0 0.1rem 0.1rem;
      h4 {
        position: relative;
        font-size: 0.12rem;
        margin-bottom: 0.08rem;
        &:after {
          content: "";
          position: absolute;
          width: 0.05rem;
          height: 0.05rem;
          border-radius: 50%;
          top: 0;bottom: 0;left:-0.1rem;
          margin: auto;
          background: #999;
        }
      }
      p {
        font-size: 0.1rem;
      }
    }
  }
}
</style>
