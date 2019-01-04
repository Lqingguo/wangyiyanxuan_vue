import ajax from './ajax'
//首页nav
export const reqMsiteList = ()=> ajax('/msiteli');
//首页所有数据
export const reqslideshow =() =>ajax('/focusList');

//content图片网易自营品牌下边
export const reqNavlist = () =>ajax('/navlist')
//专区信息
export const reqprefect =() =>ajax('/prefect')
//专区右边信息
export const reqcurrent = () =>ajax('/current')
//识物数据
export const reqgeneral =() =>ajax('/api/topic/v1/find/getTabs.json');
//识物推荐默认
// 实物推荐默认： http://m.you.163.com/topic/v1/find/recManual.json
export const reqmoren = () => ajax('/api/topic/v1/find/recManual.json')
//识物达人数据    /topic/v1/find/getTabData.json?page=1&size=5&tabId=4
export const reqexpertlist=({page,size,tabId})  =>ajax('/api/topic/v1/find/getTabData.json',{page,size,tabId})
//搜索
export  const reqSearch =(keywordPrefix) =>ajax('/api/xhr/search/searchAutoComplete.json',keywordPrefix)
