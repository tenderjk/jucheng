<template>
  <section class="hotshow">
    <mt-cell is-link title="热门演出" value="更多">
    </mt-cell>
    <ul class="hotshow_list">
      <li v-for="(item, index) in hotshowData" :key="index">
        <img :src="item.pic" alt="">
        <p>{{item.show_name}}</p>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: ['hotshowList'],
  data () {
    return {
      hotshowData: []
    }
  },
  watch: {
    hotshowList (val) {
      this.hotshowData = val
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.hotshow {
  padding:0 0.1rem;
    .mint-cell-title {
    text-align: left;
  }
  .mint-cell-wrapper {
    background-image: none;
  }
  ul {
  @include flexbox();
  @include rect(100%,1.44rem);
  overflow: auto;
    li {
    @include flex(0 0 .96rem);
    margin: 0 0.05rem;
    p {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height: 0.2rem;}
    img {
      @include rect(100%,1.24rem);
    }
    }
  }
}
</style>
