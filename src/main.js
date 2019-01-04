import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui';
import router from './router'
import store from './store'
import './mock/mockServer'
import Expert from './components/Expert/Expert.vue'
import Recommend from './components/Recommend/Recommend.vue'
Vue.component('Recommend',Recommend)
Vue.component('Expert',Expert)
Vue.config.productionTip = false
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store
})
