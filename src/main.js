import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import App from './App.vue';
import router from './router';
import currencyFilter from './filters/currency';
import timeFilter from './filters/time';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zhTW', zhTW);

Vue.filter('time', timeFilter);
Vue.filter('currency', currencyFilter);

axios.defaults.withCredentials = true;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  // console.log('to', to, 'form', from, 'next', next)
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
