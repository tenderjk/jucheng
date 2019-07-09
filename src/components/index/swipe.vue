<template>
    <section class="swiper">
        <mt-swipe :auto="4000" :show-indicators="false">
            <mt-swipe-item @click.native="jump(item.touch_url)" v-for="(item, index) in bannerList" :key="index">
                <img :src="item.touch_image_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  props: ['bannerList'],
  methods: {
    jump (url) {
      let reg = /com\/(ticket\/)?(\d+)&/
      if (!url.match(reg)) {
        Toast({
          message: '该页目前不支持跳转，滑动下一页试试？',
          position: 'middle',
          duration: 2000
        })
        return
      }
      let id = url.match(reg)[2]
      this.$router.push({ name: 'ticket', params: { id } })
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.swiper {height: 2rem;
img {@include rect(100%, 100%);}
}
</style>
