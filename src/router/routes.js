import Classfiy from '../pages/Classfiy/Classfiy.vue'
import General from '../pages/General/General.vue'
import Msite from '../pages/Msite/Msite.vue'
import Profil from '../pages/Profil/Profil.vue'
import Search from '../pages/Search/Search.vue'
import Shopcart from '../pages/Shopcart/Shopcart.vue'
import Find from '../pages/General/twopage/Find.vue'
import Selection from '../pages/General/twopage/Selection.vue'
export default [
  {
    path:'/classfiy',
    component:Classfiy,
    meta:{
      showFooter:true
    },
  },
  {
    path:'/general',
    component:General,
    meta:{
      showFooter:true
    },
    children:[
      {
        path:'find',
        component:Find,
        meta:{
          showFooter:true
        },
      },
      {
        path:'selection',
        component:Selection,
        meta:{
          showFooter:true
        },
      },
      {
        path:'/',
        redirect:'/general/find',
        meta:{
          showFooter:true
        },
      }
    ]
  },
  {
    path:'/msite',
    component:Msite,
    meta:{
      showFooter:true
    },
  },
  {
    path:'/shopcart',
    component:Shopcart,
    meta:{
      showFooter:true
    },
  },
  {
    path:'/profil',
    component:Profil,
    meta:{
      showFooter:false
    },
  },
  {
    path:'/search',
    component :Search,
    meta:{
      showFooter:false
    },
  }
  ,
  {
    path:'/',
    redirect:'/msite'
  }
]
