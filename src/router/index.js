import Vue from 'vue';
import Router from 'vue-router';

import * as guards from './guards';
import HomePage from '../pages/home/home.page.vue';
import ProfilePage from '../pages/profile/profile.page.vue';
import LoginPage from '../pages/login/login.page.vue';
import TestPage from '../pages/mytest/mytest.page.vue';
import OrdersPage from '../pages/orders/orders.page';
import SplashPage from '../pages/splash/splash.page';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      beforeEnter: guards.MustBeLoggedinGuard
    }, {
      path: '/profile',
      name: 'Profile',
      component: ProfilePage,
      beforeEnter: guards.MustBeLoggedinGuard
    }, {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      beforeEnter: guards.MustBeNotLoggedInGauard
    }, {
      path: '/splash',
      name: 'Splash',
      component: SplashPage
    }, {
      path: '/test',
      name: 'Test',
      component: TestPage
    }, {
      path: '/orders',
      name: 'Orders',
      beforeEnter: guards.MustBeLoggedinGuard,
      component: OrdersPage
    }, {
      path: '*',
      redirect: '/'
    }
  ]
});
