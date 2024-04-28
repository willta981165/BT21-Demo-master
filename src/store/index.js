import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    cart: {
      carts: [],
    },
    local: JSON.parse(localStorage.getItem('items') || '[]'),
    messages: [],
  },
  actions: {
    getCart(context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      $('#loading').css('display', 'block');
      axios.get(url).then((response) => {
        if (response.data.data.carts) {
          context.commit('CART', response.data.data);
        }
        $('#loading').css('display', 'none');
      });
    },
    deletCarts(context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      $('#loading').css('display', 'block');
      axios.delete(url).then((response) => {
        if (response.data.success) {
          context.dispatch('getCart');
          $('#loading').css('display', 'none');
          context.dispatch('updateMessage', { message: '已從購物車移除', status: 'danger' });
        }
      });
    },
    addCar(context, { id, qty }) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      $('#loading').css('display', 'block');
      const car = {
        product_id: id,
        qty,
      };
      axios.post(url, { data: car }).then((response) => {
        if (response.data.success) {
          context.dispatch('getCart');
          $('#loading').css('display', 'none');
          context.dispatch('updateMessage', { message: '已加入購物車', status: 'success' });
        }
      });
    },
    setlocal(context, item) {
      context.commit('getlocal', item);
      context.dispatch('updateMessage', { message: '已加入我的最愛', status: 'success' });
    },
    remove(context, item) {
      context.commit('remlocal', item);
      context.dispatch('updateMessage', { message: '已移除我的最愛', status: 'danger' });
    },
    removefav(context, item) {
      context.commit('remfavlocal', item);
      context.dispatch('updateMessage', { message: '已移除我的最愛', status: 'danger' });
    },
    updateMessage(context, payload) {
      const timestamp = Math.floor(new Date() / 1000);
      const payloading = payload;
      payloading.timestamp = timestamp;
      context.commit('ALERTMESSAGE', payload);
      setTimeout(() => {
        context.commit('REMOVEALERTWITHTIMIMG', payloading.timestamp);
      }, 2000);
    },
  },
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    },
    getlocal(state, item) {
      const items = {
        item_favItem: item.favItem,
        item_title: item.title,
        item_id: item.id,
      };
      state.local.push(items);
      localStorage.setItem('items', JSON.stringify(state.local));
    },
    remlocal(state, item) {
      const index = state.local.findIndex((items) => item.title === items.item_title);
      state.local.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(state.local));
    },
    remfavlocal(state, item) {
      const index = state.local.findIndex((items) => item.item_title === items.item_title);
      state.local.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(state.local));
    },
    ALERTMESSAGE(state, payload) {
      state.messages.push(payload);
    },
    REMOVEALERTWITHTIMIMG(state, timestamp) {
      state.messages.forEach((item, index) => {
        if (item.timestamp === timestamp) {
          state.messages.splice(index, 1);
        }
      });
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    local(state) {
      return state.local;
    },
  },
});
