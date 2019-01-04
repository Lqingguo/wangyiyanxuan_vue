/**
 * Created by liqingguo on 2018/12/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import msite from './modules/msite'
import reqprefect from './modules/reqprefect'
import general from './modules/general'


Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    msite,
    reqprefect,
    general,
  },
  state
})
