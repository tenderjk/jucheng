<template>
  <div class="infoshowList">
    <div class="infoshow_header">
      <div class="desc">
        <img :src="infoshowData.pic" alt="">
        <div class="box">
          <p class="area">{{infoshowData.name}}</p>
          <p class="count">{{infoshowData.count}}场在售演出</p>
        </div>
      </div>
      <div class="dot"><span class="iconfont icon-dot"></span></div>
    </div>
    <div class="info_content">
      <ul>
        <li v-for="(item,index) in infoshowData.show_list" :key="index">
          <div class="timeline">
            <span>{{item.show_time}}</span>
          </div>
          <div class="cover">
            <img :src="item.pic" alt="">
          </div>
        </li>
        <li class="seemore">
          <div class="timeline">
            <span>&nbsp;</span>
          </div>
          <div class="cover">
            <span>查看更多</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['infoshowData']
}
</script>
<style lang="scss">
@import url('//at.alicdn.com/t/font_1225232_e28vy1kaiqv.css');
@import '@/lib/reset.scss';
.infoshowList {
  padding: 0.2rem;
  margin:0 0.1rem 0.2rem;
  border: 0.01rem solid #e5e5e5;
  .infoshow_header {
    @include flexbox();
    @include rect(100%,0.42rem);
    justify-content: space-between;
    .desc {
      @include flexbox();
      img {
        @include rect(0.42rem,0.42rem);
        display: block;
        border-radius: 0.08rem;
        }
        .box {
          margin-left: 0.1rem;
          text-align: left;
          .area {font-weight: bold;font-size: 0.13rem;}
          .count {font-size: 0.1rem;}
        }
    }
  }
  .info_content {
    margin-top: 0.2rem;
    overflow: auto;
    ul {
      @include flexbox();
      @include rect(100%,auto);
      li {
        .cover {
          padding:0 0.02rem;
          img {
            @include rect(100%,1.24rem);
          }
        }
        @include flex(0 0 0.97rem);
        @include rect(0.97rem,auto);
        &.seemore {
          .cover {
            background: #e5e5e5;
            line-height: 1.24rem;
            margin: 0 0.02rem;
            @include rect(100%,1.24rem);
            }
        }
        .timeline {
          padding-bottom: 0.2rem;
          margin-bottom: 0.2rem;
          border-bottom: 0.02rem solid rgb(194, 193, 193);
          position: relative;
          &:after {
            content: "";
            display: block;
            background: rgb(194, 193, 193);
            @include rect(0.1rem,0.1rem);
            border-radius: 50%;
            position: absolute;
            bottom: -0.04rem;
            left: 0;
            right: 0;
            margin: auto;
          }
        }
      }
    }
  }
}
</style>
