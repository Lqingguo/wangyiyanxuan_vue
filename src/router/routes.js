// import Classfiy from '../pages/Classfiy/Classfiy.vue'
// import General from '../pages/General/General.vue'
// import Msite from '../pages/Msite/Msite.vue'
// import Profil from '../pages/Profil/Profil.vue'
// import Search from '../pages/Search/Search.vue'
// import Shopcart from '../pages/Shopcart/Shopcart.vue'

const Classfiy = () => import('../pages/Classfiy/Classfiy.vue')
const General = () => import('../pages/General/General.vue')
const Msite = () => import('../pages/Msite/Msite.vue')
const Profil = () => import('../pages/Profil/Profil.vue')
const Search = () => import('../pages/Search/Search.vue')
const Shopcart = () => import('../pages/Shopcart/Shopcart.vue')
const Find = () => import('../pages/General/twopage/Find.vue')
const Selection = () => import('../pages/General/twopage/Selection.vue')



// import Find from '../pages/General/twopage/Find.vue'
// import Selection from '../pages/General/twopage/Selection.vue'
export default [
  {
    path:'/classfiy',
    component:Classfiy,
    meta:{
      showFooter:true
    },
  },
  {
    path:'/General',
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
