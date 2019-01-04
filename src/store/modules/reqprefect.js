/**
 * Created by liqingguo on 2018/12/30.
 */
import {reqprefect} from '../../api/index'
import {REQLISTMESSAGE} from '../mutation-types'
const state = {
  listmessages: [],//left
}
const actions = {
   async getlistmessage({commit},callback){
      const result =await reqprefect()
        const listmessages = result.data
        commit(REQLISTMESSAGE,{listmessages})
        typeof callback === 'function' && callback()
      }
}
const mutations = {
    [REQLISTMESSAGE](state,{listmessages}){
      state.listmessages = listmessages
    },
}
const getters = {

}
export default {
  state,
  actions,
  mutations,
  getters
}
