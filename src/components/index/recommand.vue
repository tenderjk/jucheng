<template>
    <section class="recommand">
      <mt-cell title="为你推荐">
      </mt-cell>
      <ul class="recommandContain" :infinite-scroll-immediate-check="true" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <li @click="jump(item.sche_id)" v-for="(item,index) in recommandList" :key="index">
          <div class="img">
            <img :src="item.schePic" alt="">
          </div>
          <div class="description">
            <p class="showtime"><strong>{{item.show_time}}</strong></p>
            <h4>{{item.show_name}}</h4>
            <address>{{item.c_name}}&nbsp;|&nbsp;{{item.v_name}}</address>
            <p class="low_price"><span>￥{{item.low_price | toFixZero}}</span>起</p>
          </div>
        </li>
      </ul>
      <button class="seemore" v-if="loading">查看更多演出</button>
    </section>
</template>
<script>
import axios from 'axios'
export default {
  inject: ['jump'],
  props: ['recommandLink'],
  data () {
    return {
      loading: false,
      recommandList: [],
      page: 1
    }
  },
  filters: {
    toFixZero (val) {
      return Number(val)
    }
  },
  methods: {
    async loadMore () {
      let recommandList = await axios.get(this.$props.recommandLink + '&page=' + this.page)
      recommandList = recommandList.data.data.recommend_show_list
      if (recommandList.length === 0) {
        this.loading = true
        return
      }
      this.recommandList = [...this.recommandList, ...recommandList]
      this.page++
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.recommand {
  margin: 0.2rem 0.1rem;
  .mint-cell-title {
    text-align: left;
  }
  .mint-cell-wrapper {
    background-image: none;
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
  .seemore {
    @include rect(1.35rem,0.3rem);
    border: 0.01rem solid #ff6743;
    color: #ff6743;
    background: none;
    border-radius: 0.08rem;
  }
}
</style>
