<template>
    <section class="recommand">
      <ul class="recommandContain">
        <li @click="jump(item.detail.schedular_id)" v-for="(item,index) in followData" :key="index">
          <div class="img">
            <img :src="item.detail.pic_address" alt="">
          </div>
          <div class="description">
            <p class="showtime"><strong>{{item.detail.show_time}}</strong></p>
            <h4>{{item.detail.schedular_name}}</h4>
            <address>{{item.detail.city_name}}&nbsp;|&nbsp;{{item.detail.venue_name}}</address>
            <p class="low_price"><span>￥{{item.detail.low_price | toFixZero}}</span>起</p>
          </div>
        </li>
      </ul>
    </section>
</template>
<script>
export default {
  props: ['followData'],
  inject: ['jump'],
  filters: {
    toFixZero (val) {
      return Number(val)
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.recommand {
  margin: 0.2rem 0.1rem;
  text-align: left;
  .title {
      font-weight: bold;
      font-size: 0.18rem;
      margin-bottom: 0.2rem;
    }
  .recommandContain {
    li {
      @include flexbox();
      @include rect(100%,auto);
      justify-content: space-between;
      align-items: center;
      margin: 0 0 0.2rem;
      .img {
        @include rect(0.94rem,1.28rem);
        @include flex(0 0 0.94rem);
        margin-right: 0.12rem;
        img {
          @include rect(100%,100%);
          display: block;
        }
      }
      .description {
        @include flexbox();
        @include rect(100%,1.3rem);
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        .showtime {
          font-size: 0.12rem;
        }
        h4 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          word-break: break-all;
          -webkit-box-orient: vertical;
          font-size: 0.13rem;
        }
        address {
          font-size: 0.1rem;
        }
        .low_price {
          font-size: 0.12rem;
          span{color: #ff6743}
        }
      }
    }
  }
}
</style>
