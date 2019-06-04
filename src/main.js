import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { Swipe, SwipeItem, Cell, InfiniteScroll, Header, Button } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Cell.name, Cell)
Vue.use(InfiniteScroll)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
