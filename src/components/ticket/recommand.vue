<template>
    <section class="recommand">
      <h4 class="title">为你推荐</h4>
      <ul class="recommandContain" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <li @click="jump(item.schedular_id)" v-for="(item,index) in recommandData" :key="index">
          <div class="img">
            <img :src="item.pic" alt="">
          </div>
          <div class="description">
            <p class="showtime"><strong>{{item.show_time_top}}</strong></p>
            <h4>{{item.name}}</h4>
            <address>{{item.city_name}}&nbsp;|&nbsp;{{item.venue_name}}</address>
            <p class="low_price"><span>￥{{item.min_price | toFixZero}}</span>起</p>
          </div>
        </li>
      </ul>
      <div class="seemoreContain">
        <button class="seemore" v-if="loading">查看更多演出</button>
      </div>
    </section>
</template>
<script>
export default {
  props: ['recommandList'],
  inject: ['jump'],
  data () {
    return {
      loading: false,
      recommandData: [],
      position: 0
    }
  },
  filters: {
    toFixZero (val) {
      return Number(val)
    }
  },
  methods: {
    loadMore () {
      let length = this.$props.recommandList.length
      if (this.position === length) {
        this.loading = true
        return
      }
      let end = this.position + 4
      end = end > length ? length : end
      for (let i = this.position; i < end; i++) {
        this.recommandData.push(this.$props.recommandList[i])
      }
      this.position = end
    }
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
  .seemoreContain {
    text-align: center;
    .seemore {
      @include rect(1.35rem,0.3rem);
      border: 0.01rem solid #ff6743;
      color: #ff6743;
      background: none;
      border-radius: 0.08rem;
    }
  }
}
</style>
