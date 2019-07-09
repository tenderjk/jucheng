import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { Swipe, SwipeItem, Cell, InfiniteScroll, Header, Button, Popup } from 'mint-ui'
import { Checkbox, CheckboxGroup, Stepper, SubmitBar } from 'vant'
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(Stepper)
Vue.use(SubmitBar)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Cell.name, Cell)
Vue.use(InfiniteScroll)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Popup.name, Popup)
Vue.config.productionTip = false
const Bus = new Vue()
new Vue({
  router,
  store,
  data: {
    Bus
  },
  render: h => h(App)
}).$mount('#app')
