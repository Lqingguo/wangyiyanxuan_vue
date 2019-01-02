import Classfiy from '../pages/Classfiy/Classfiy.vue'
import General from '../pages/General/General.vue'
import Msite from '../pages/Msite/Msite.vue'
import Profil from '../pages/Profil/Profil.vue'
import Shopcart from '../pages/Shopcart/Shopcart.vue'
import Find from '../pages/General/twopage/Find.vue'
import Selection from '../pages/General/twopage/Selection.vue'

export default [
  {
    path:'/classfiy',
    component:Classfiy
  },
  {
    path:'/general',
    component:General,
    children:[
      {
        path:'find',
        component:Find
      },
      {
        path:'selection',
        component:Selection
      },
      {
        path:'/',
        redirect:'/general/find'
      }
    ]
  },
  {
    path:'/msite',
    component:Msite
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/profil',
    component:Profil
  },
  {
    path:'/',
    redirect:'/msite'
  }
]
