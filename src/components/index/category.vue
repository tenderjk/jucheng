<template>
  <div class="category" v-if="categoryLeastList.length>1">
    <mt-cell is-link :title="categoryList.title" value="更多">
    </mt-cell>
    <div class="bg">
      <div class="cover">
        <img :src="cover.pic" alt="">
      </div>
      <div class="bg_content">
        <p class="date"><b>{{cover.date}}</b>&nbsp;&nbsp;{{cover.week}}</p>
        <p class="description">{{cover.schedular_name}}</p>
        <address><span>{{cover.city_name}}</span>&nbsp;|&nbsp;<span>{{cover.venue_name}}</span></address>
      </div>
    </div>
    <div class="cetegorylist">
       <ul class="cetegorylistul">
        <li v-for="(item, index) in categoryLeastList" :key="index">
          <img :src="item.pic" alt="">
          <h3>{{item.schedular_name}}</h3>
          <p class="low_price">￥<span>{{item.low_price | fixedToZero}}</span>起</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['categoryList'],
  data () {
    return {
      cover: '',
      categoryLeastList: []
    }
  },
  filters: {
    fixedToZero (value) {
      return Number(value)
    }
  },
  mounted () {
    this.cover = this.$props.categoryList.list[0]
    this.categoryLeastList = this.$props.categoryList.list.slice(1)
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.category {
  margin: 0.5rem 0;
  .mint-cell-title {
  text-align: left;
  padding: 0 0.1rem;
  }
  .mint-cell-wrapper {
    background-image: none;
  }
  .bg {
    color: #fff;
    padding: 0.1rem;
    background: rgb(167, 167, 168);
    @include flexbox();
    @include rect(100%,auto);
    margin: 0 0 0.1rem;
    justify-content: space-around;
    .cover {
      @include rect(0.93rem,1.26rem);
        img {
        @include rect(100%,100%);
      }
    }
    .bg_content {
      @include flexbox();
      width: 1.8rem;
      text-align: left;
      flex-direction: column;
      justify-content: space-around;
      .date {font-size: 0.12rem;}
      .description {
        line-height: 0.15rem;
        max-height: 0.3rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        word-break: break-all;
        -webkit-box-orient: vertical;
        font-size: 0.15rem;
      }
      address {
        font-size: 0.12rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .cetegorylist {
    margin: 0 0.1rem;
    overflow: auto;
    .cetegorylistul {
    @include flexbox();
    @include rect(100%,auto);
    li {
      margin-right: 0.1rem;
      width: 0.96rem;
      img {
        @include rect(100%,1.24rem);
      }
      h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .low_price {
        span {color: #ff6743}
      }
    }
  }
}
}
</style>
