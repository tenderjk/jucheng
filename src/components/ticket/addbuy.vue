<template>
  <footer>
    <div class="service">
      <span class="iconfont icon-kefu"></span>
      <p>客服</p>
    </div>
    <div class="buyButton" @click="add">
      加入收藏
    </div>
  </footer>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      id: '',
      img: '',
      name: '',
      price: ''
    }
  },
  mounted () {
    this.$root.Bus.$on('ticketMsg', res => {
      this.id = res.id
      this.img = res.img
      this.name = res.name
      this.price = res.price
    })
  },
  methods: {
    add () {
      if (this.$store.state.login.loginStatus !== true) {
        this.$router.push({ name: 'login' })
        return
      }
      if (this.id === '') {
        Toast({
          message: '请等待数据加载',
          position: 'middle',
          duration: 2000
        })
        return
      }
      this.$store.commit('addCart', { id: this.id, img: this.img, name: this.name, price: this.price })
      Toast({
        message: '添加成功',
        position: 'middle',
        duration: 2000
      })
    }
  },
  beforeDestroy () {
    this.$root.Bus.$off('ticketMsg')
  }
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
