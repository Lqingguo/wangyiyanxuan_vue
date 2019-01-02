/**
 * Created by liqingguo on 2018/12/29.
 */
import Mock from 'mockjs'
import msitelist from './feilei_list.json'
import shouye from './shouye_data.json'
import prefect from './fenlei_zhuanqu.json'
Mock.mock('/msiteli',{code:0,data:msitelist.data})
Mock.mock('/focusList',{code:0,data:shouye.focusList})
Mock.mock('/navlist',{code:0,data:shouye.kingKongModule})
Mock.mock('/prefect',{code:0,data:prefect.categoryL1List})
Mock.mock('/current',{code:0,data:prefect.currentCategory})
