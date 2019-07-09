<template>
  <div id="collection" class="container">
    <div class="main-contain">
      <mt-cell title="收藏">
      </mt-cell>
      <CheckList @delete="del" v-for="item in collectionData" :collectData="item" :key="item.id"/>
    </div>
    <van-submit-bar
      :price="price"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox @click="checkAll" v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import CheckList from '@/components/collection/collectionList'
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.login.loginStatus !== true) {
        next('/login')
      } else {
        next()
      }
    })
  },
  data () {
    return {
      collectionData: [],
      checked: false
    }
  },
  components: {
    CheckList
  },
  async mounted () {
    this.deepCopy()
  },
  methods: {
    del (id) {
      let index = this.collectionData.findIndex(v => v.id === id)
      this.collectionData.splice(index, 1)
    },
    onSubmit () {
      Toast({
        message: '模拟请求，输出在打印台',
        position: 'middle',
        duration: 2000
      })
      let collectData = []
      this.collectionData.forEach(v => {
        if (v.check) {
          collectData.push({ id: v.id, num: v.num })
        }
      })
      let userData = this.$store.state.login.loginName
      let data = { username: userData, data: collectData }
      console.log(JSON.stringify(data))
    },
    deepCopy () {
      this.collectionData = JSON.parse(JSON.stringify(this.$store.state.cart.cartList))
    },
    checkAll () {
      if (this.checked === false) {
        this.collectionData = this.collectionData.map(v => {
          return Object.assign({}, v, { check: true })
        })
      } else {
        this.collectionData = this.collectionData.map(v => {
          return Object.assign({}, v, { check: false })
        })
      }
    }
  },
  computed: {
    price () {
      let total = 0
      this.collectionData.map(v => {
        if (v.check) {
          total += v.price * v.num
        }
      })
      return total * 100
    },
    ifcheck () {
      return this.collectionData.map(v => v.check)
    }
  },
  watch: {
    ifcheck (arr) {
      let flag = true
      if (arr.length === 0) {
        flag = false
      }
      arr.forEach(v => {
        if (v !== true) {
          flag = false
        }
      })
      this.checked = flag
    }
  }
}
</script>
<style lang="scss">
#collection {
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  .main-contain {
    flex:1;
    overflow: auto;
  }
  .van-submit-bar {
    position: static;
    flex: 0 0 .5rem;
    .van-checkbox {
      margin-left: .1rem;
    }
  }
}
</style>
