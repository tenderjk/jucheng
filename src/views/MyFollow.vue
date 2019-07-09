<template>
  <div id="myfollow" class="container">
    <div class="header">
      <mt-header fixed title="我的收藏">
          <mt-button slot="left" icon="back" @click="$router.go(-1)">返回</mt-button>
          <mt-button icon="more" slot="right"  @click="ifshow=!ifshow"></mt-button>
      </mt-header>
      <div v-if="ifshow" class="content" :class="{'show-content':ifshow}">
        <router-link to="/"><span class="iconfont icon-shouye"></span>首页</router-link>
        <router-link to="/user"><span class="iconfont icon-iconfuzhi"></span>我的</router-link>
      </div>
    </div>
    <followList :followData="followData" />
    <div v-if="ifshow" @click="ifshow=!ifshow" class="alert" :class="{show:ifshow}">
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import followList from '@/components/myFollow/followList'
export default {
  name: 'myfollow',
  data () {
    return {
      followData: null,
      ifshow: false
    }
  },
  components: {
    followList
  },
  async mounted () {
    let data = await axios.get('https://m.juooo.com/Myjuooo/mycollection?p=1')
    data = data.data.collectionList
    this.followData = data
  }
}
</script>
<style lang="scss">
  @import url('//at.alicdn.com/t/font_1225232_sw64rvhe16.css');
  #myfollow {
    .mint-header {
      background: #fff;
      color: #000;
    }
    .header {
      height: .35rem;
      position: relative;
      .content {
      a {
        padding: .05rem 0;
      }
      text-align: left;
      border-radius: .03rem;
      z-index: 2;
      position: absolute;
      bottom: -.6rem;
      right: .03rem;
      width: 1rem;
      background: #fff;
      span {margin: 0 .1rem;}
      &::after {
        content: '';
        position: absolute;
        width: 0;height: 0;
        display: block;
        border: .05rem solid transparent;
        border-bottom: .05rem solid #fff;
        top: -.098rem;
        right: .08rem;
      }
      a {
        display: block;
        color: #000;
      }
    }
    }
    .alert {
      z-index: 1;
      background: #000;
      position: fixed;
      left: 0;right: 0;top: 0;bottom: 0;
      margin: auto;
    }
    .show {
      animation: show .3s;
      animation-fill-mode:forwards;
    }
    .show-content {
      animation: showcontent .3s;
      animation-fill-mode:forwards;
    }
    @keyframes show {
      0% {opacity: 0;}
      100% {opacity: .5;}
    }
    @keyframes showcontent {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }
  }
</style>
