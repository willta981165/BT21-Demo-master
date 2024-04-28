import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/frontend/Main.vue';
import Shop from '@/views/frontend/Shop.vue';
import Login from '@/views/frontend/Login.vue';
import Control from '@/views/frontend/Control.vue';
import Order from '@/views/backend/ControlOrder.vue';
import Coupon from '@/views/backend/ControlCoupon.vue';
import Product from '@/views/backend/ControlProduct.vue';
import product from '@/views/frontend/Product.vue';
import custormerOrder from '@/views/frontend/CustormerOrder.vue';
import ordercreat from '@/views/frontend/Ordercreat.vue';
import checkorder from '@/views/frontend/Checkorder.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/detail/:itemID',
      name: 'oneproduct',
      component: product,
    },
    {
      path: '/control',
      name: 'Control',
      component: Control,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'product',
          name: 'product',
          component: Product,
          meta: { requiresAuth: true },
        },
        {
          path: 'order',
          name: 'order',
          component: Order,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: Coupon,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/custormerOrder',
      name: 'custormerOrder',
      component: custormerOrder,
    },
    {
      path: '/ordercreat',
      name: 'ordercreat',
      component: ordercreat,
    },
    {
      path: '/checkorder/:OrderId',
      name: 'checkorder',
      component: checkorder,
    },
  ],
});

// const router = new VueRouter({
//   routes
// })

// export default router
