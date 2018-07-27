// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import look from '../pages/look/look.vue'
import classify from '../pages/classify/classify.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/look',
      component: look
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/shoppingcart',
      component: ShoppingCart
    },
    {
      path: '/profile',
      component: Profile
    }
  ]

})
