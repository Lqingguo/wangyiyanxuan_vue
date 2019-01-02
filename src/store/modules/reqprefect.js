/**
 * Created by liqingguo on 2018/12/30.
 */
import {reqprefect,reqcurrent} from '../../api/index'
import {REQLISTMESSAGE,GETCURRENTCATE} from '../mutation-types'
const state = {
  listmessages: [],//left
  currentCategory:{} //right
}
const actions = {
   async getlistmessage({commit},callback){
      const result =await reqprefect()
        const listmessages = result.data
        commit(REQLISTMESSAGE,{listmessages})
        typeof callback === 'function' && callback()
      },
      async getcurrentcate({commit}){
        const result = await reqcurrent()
        const  currentCategory= result.data
        commit(GETCURRENTCATE,{currentCategory})
      }


}
const mutations = {
    [REQLISTMESSAGE](state,{listmessages}){
      state.listmessages = listmessages
    },
    [GETCURRENTCATE](state,{currentCategory}){
      state.currentCategory = currentCategory
    }
}
const getters = {

}
export default {
  state,
  actions,
  mutations,
  getters
}
