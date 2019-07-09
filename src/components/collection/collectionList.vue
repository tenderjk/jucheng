<template>
  <div class="check-contain">
    <van-checkbox
    v-model="collectData.check"
  >
      <img class="collectimg" :src="collectData.img" />
    </van-checkbox>
    <div class="option-contain">
      <p class="desc">{{collectData.name}}</p>
      <p class="price">￥<span>{{collectData.price}}</span></p>
      <div class="options">
        <van-stepper @change="updateCart" v-model.lazy="collectData.num" />
        <mt-button size="small" @click.native="showDialog(collectData.id)" type="danger">删除</mt-button>
        <!-- <button @click="showDialog(collectData.id)">删除</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from 'vant'
export default {
  props: ['collectData'],
  methods: {
    updateCart () {
      // console.log(this.$store.state.cart.cartList)
      this.$store.commit('updateCart', { id: this.collectData.id, num: this.collectData.num })
    },
    showDialog (id) {
      Dialog.confirm({
        title: '提示',
        message: '确认删除吗'
      }).then(() => {
        // on confirm
        this.$store.commit('removeCart', id)
        this.$emit('delete', id)
      }).catch(() => {
        // on cancel
        console.log('cancel')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .check-contain {
    display: flex;
    padding: .1rem;
    margin-top: .1rem;
    background: #fff;
    .van-checkbox {
      flex: 0 0 1.1rem;
      display: flex;
      .collectimg {
        width: .9rem;
        height: 1.2rem;
      }
    }
    .option-contain {
      text-align: left;
      flex: 1;
      margin-left: .05rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .options {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .price {
        span {
          margin-left: .05rem;
          color:#ff6743;
        }
      }
      .desc {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        word-break: break-all;
        -webkit-box-orient: vertical;
        font-size: 0.13rem
      }
    }
  }
</style>
