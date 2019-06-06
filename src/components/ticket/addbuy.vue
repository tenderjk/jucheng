<template>
  <footer>
    <div class="service">
      <span class="iconfont icon-kefu"></span>
      <p>客服</p>
    </div>
    <div class="buyButton">
      立即购买
    </div>
  </footer>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import url('//at.alicdn.com/t/font_1225232_yl150jpyaqj.css');
@import '@/lib/reset.scss';
  footer {
    @include flexbox();
    @include flex(0 0 0.4rem);
    @include rect(100%,auto);
    justify-content: space-between;
    .service {
      @include flex(0 0 0.4rem);
      @include flexbox();
      @include rect(auto,auto);
      flex-direction: column;
      justify-content: space-around;
      p {
        font-size: 0.1rem;
      }
      span {
        font-size: 0.15rem;
      }
    }
    .buyButton {
      @include flex(1);
      color: #fff;
      font-size: 0.14rem;
      font-weight: bold;
      line-height: 0.4rem;
      background-image: linear-gradient(-50deg,#ff4d4a,#ff9a34),linear-gradient(#fefefe,#fefefe);
    }
  }
</style>
