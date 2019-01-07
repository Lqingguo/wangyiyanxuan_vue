import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui';
import router from './router'
import store from './store'
import './mock/mockServer'
import Expert from './components/Expert/Expert.vue'
import Recommend from './components/Recommend/Recommend.vue'
import Home from './components/Home/Home.vue'
import Upboxing from './components/Upboxing/Upboxing.vue'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/timg.gif'
Vue.component('Recommend',Recommend)
Vue.component('Expert',Expert)
Vue.component('Upboxing',Upboxing)
Vue.component('Home',Home)

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(VueLazyload,{
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store
})
