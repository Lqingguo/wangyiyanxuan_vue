/**
 * Created by liqingguo on 2019/1/2.
 */

import {
  reqgeneral,
  reqmoren
}from '../../api/index'
import {
  NAVGEN,
  NAVCON
} from '../mutation-types'
const state = {
  navgeneral:[], //第三页导航,
  navcontent:[] //第三页内容
}
const actions = {
 async getnavgeneral({commit}){
    const result = await reqgeneral();
      const navgeneral = result.data
      commit(NAVGEN,{navgeneral})
  },
  async getnavcontent({commit}){
   const result = await reqmoren();
   const navcontent = result.data
    commit(NAVCON,{navcontent})
  }
}
const mutations = {
    [NAVGEN](state,{navgeneral}){
      state.navgeneral = navgeneral
    },
    [NAVCON](state,{navcontent}){
      state.navcontent = navcontent
    }
}
const getters = {

}
export default {
  state,
  actions,
  getters,
  mutations
}
