/**
 * Created by liqingguo on 2018/12/29.
 */
import {
  HOMEPAGE,
  SLIDESHOW,
  NAVLIST
} from '../mutation-types'
import {
  reqMsiteList,
  reqslideshow,
  reqNavlist
} from '../../api'
const state = {
  msitelist : [],//首页nav
  slideshow: [], //首页轮播图
  navlist : [] ///网易自营品牌下边
};
const actions = {
  //首页nav
 async getmsitelist({commit},callback){
    const result =await reqMsiteList();
    if(result.code === 0){
      const msitelist = result.data
      commit(HOMEPAGE,{msitelist})
      typeof callback === 'function' && callback()
    }
  },
  //轮播图
  async getslideshow({commit},callback){
    const result = await reqslideshow()
    if(result.code === 0){
      const slideshow = result.data
      commit(SLIDESHOW,{slideshow})
      typeof callback === 'function' && callback()
    }
  },
  ///网易自营品牌下边
  async getnavlist({commit}){
   const result = await reqNavlist();
   const navlist = result.data
   commit(NAVLIST,{navlist})
  }
};
const mutations = {
  [HOMEPAGE](state,{msitelist}){
    state.msitelist = msitelist
  },
  [SLIDESHOW](state,{slideshow}){
    state.slideshow = slideshow
  },
  [NAVLIST] (state,{navlist}){
    state.navlist = navlist
  }
};
const getters  = {

};
export default {
  state,
  actions,
  mutations,
  getters
}
