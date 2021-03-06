/**
 * Created by liqingguo on 2019/1/2.
 */

import {
  reqgeneral,
  reqmoren,
  reqexpertlist, // 达人
  reqSearch ,  //搜索
  reqboxing,   //晒单
  reqthree   //晒单下边那三个
}from '../../api/index'
import {
  NAVGEN,
  NAVCON,
  SAVEXPERTLIST,
  GETSEARCH,
  GETBOXINGS,
  GETTHREES,
  GETHOMES
} from '../mutation-types'
const state = {
  navgeneral:[], //第三页导航,
  navcontent:[], //第三页推荐
  expertlist :[] ,//第三页达人
  items:[], //搜索列表
  boxs:{} ,  //晒图
  threes:{} ,  //晒单下边三个
  homes :{}   // HOME
}
const actions = {
 async getnavgeneral({commit}){
    const result = await reqgeneral();
      const navgeneral = result.data
      commit(NAVGEN,{navgeneral})
  },
  async getnavcontent({commit},fn){
   const result = await reqmoren();
   const navcontent = result.data
    commit(NAVCON,{navcontent})
     fn && fn()
  },
   async getexpertlist({commit},{page,size,tabId}){
    const result = await reqexpertlist({page:page+1,size,tabId});
    const expertlist = result.data.result
    commit(SAVEXPERTLIST,{expertlist})
   },
  //搜索
  async getSearchvalue({commit},{keywordPrefix}){
   const result = await reqSearch({keywordPrefix})
    const items = result.data
    commit(GETSEARCH,{items})
  },
  //晒单
  async getboxing({commit}){
   const result = await reqboxing();
   const boxs = result.data
    commit(GETBOXINGS,{boxs})
  },
  //晒单下边三个
  async getbothree ({commit},{page,size,type}){
   const result = await reqthree({page,size,type})
    const threes = result.data
    commit(GETTHREES,{threes})
  },
  //HOme
  async gethome ({commit},{page,size,tabId}){
   const result = await reqexpertlist ({page,size,tabId})
    const homes = result.data
    commit(GETHOMES,{homes})
  }
}
const mutations = {
    [NAVGEN](state,{navgeneral}){
      state.navgeneral = navgeneral
    },
    [NAVCON](state,{navcontent}){
      state.navcontent = navcontent
    },
    [SAVEXPERTLIST](state,{expertlist}){
      expertlist.forEach(item=> state.expertlist.push(item))
    },
  //搜索
    [GETSEARCH](state,{items}){
      state.items = items
    },
  //晒物
    [GETBOXINGS](state,{boxs}){
      state.boxs = boxs
    },
  //晒物下边三个
    [GETTHREES](state,{threes}){
      state.threes = threes
    },
  //HOME
    [GETHOMES] (state,{homes}){
      state.homes = homes
    }
}
const getters = {
    toarrlist(state){
      if(!state.navcontent.length){
        return
      }
      const arrlist = []
      for(let j = 0 ;j<state.navcontent.length;j++){
        let item =state.navcontent[j]
        if(item.topics.length){
          for(let i = 0; i<item.topics.length;i++){
            arrlist.push(item.topics[i])
          }
        }
      }
      return  arrlist
    }
}
export default {
  state,
  actions,
  getters,
  mutations
}
