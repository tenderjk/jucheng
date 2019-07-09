import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from '@/store/login'
import cartStore from '@/store/ticket'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    login: loginStore,
    cart: cartStore
  }
})
