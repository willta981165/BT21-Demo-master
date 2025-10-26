<template>
  <div>
    <div id="loading">
      <img
        src="https://i.pinimg.com/originals/f6/ce/0e/f6ce0eddadaff51331fe2367cc591d7b.gif"
        alt="loading.."
        width="300"
      />
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div class="container">
        <img src="../assets/img/bts.png" width="60" height="60"
        class="d-inline-block align-top" alt />
        <a class="navbar-brand ml-3" href="#">
          <h1 class="header-title">BT21</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav align-items-center w-100">
            <li class="nav-item">
              <router-link to="/" class="nav-link" exact>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/shop" class="nav-link">SHOP</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click="goNewArrival">HOTITEM</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click="goEpaper">E-PAPER</a>
            </li>
            <li class="nav-item ml-lg-auto">
              <a class="nav-link" href="#/login">
                <i class="fa fa-user fa-lg"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex justify-content-end">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-white"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-shopping-cart fa-lg"></i>
                <span class="badge-pill badge-danger badge-revision"
                v-if="cart.carts !== undefined  &&  cart.carts.length > 0">
                {{ cart.carts.length }}</span>
              </button>
              <div class="dropdown-menu dropdown-menu-right badge-box">
                <div class="p-2 px-sm-3" v-if="cart.carts !== undefined  &&  cart.carts.length > 0">
                  <h5 class="text-center badge-size">購物車清單</h5>
                  <table class="table mb-2" style="min-width: 305px;">
                    <tbody>
                      <tr v-for="(item) in cart.carts" :key="item.id">
                        <td>
                          <a class="text-danger" @click="deletCarts(item.id)">
                            <i class="fas fa-trash-alt"></i>
                          </a>
                        </td>
                        <td class="ellipsis">{{ item.product.title }}</td>
                        <td>{{ item.qty }}{{ item.product.unit }}</td>
                        <td style="font-size: 14px; padding-top: 14px;">NTD{{ item.total }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#/custormerOrder" class="btn btn-dark d-block mb-2">
                    <i class="fas fa-cart-arrow-down"></i>
                    結帳去
                  </a>
                </div>
                <div class="p-2 px-sm-3 text-center"
                v-if="cart.carts !== undefined  &&  cart.carts.length < 1">
                  <p class="text-center badge-size">目前沒有商品</p>
                   <a class="btn btn-warning" href="#/shop">購物去</a>
                </div>
              </div>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-white"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-heart fa-lg"></i>
                  <span class="badge-pill badge-danger badge-revision"
                  v-if="local">{{local.length}}</span>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <div class="pt-2 px-3">
                    <h5 class="text-center badge-size">我的最愛</h5>
                    <table class="table mb-2" style="min-width: 270px;">
                      <tbody>
                        <tr v-for="(item) in local" :key="item.id" class="text-center">
                          <td>
                            <a href="#"><i class="fas fa-times" style="font-size: 37px;"
                            @click="removelocal(item)"></i></a>
                          </td>
                          <td>
                            <a
                              href="#"
                              style="text-decoration:none; padding: 0.55em;"
                              class="d-block"
                              @click.prevent="getdetail(item)"
                            >{{ item.item_title }}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['product'],
  name: 'Layout',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['cart', 'local']),
  },
  methods: {
    goNewArrival() {
      const vm = this;
      if (vm.$route.path === '/') {
        vm.scrollToAnchor('#hotitem');
      } else {
        vm.$router.push('/').then(() => {
          vm.scrollToAnchor('#hotitem');
        });
      }
    },
    goEpaper() {
      const vm = this;
      if (vm.$route.path === '/') {
        vm.scrollToAnchor('#epaper');
      } else {
        vm.$router.push('/').then(() => {
          vm.scrollToAnchor('#epaper');
        });
      }
    },
    removelocal(item) {
      const vm = this;
      vm.product.forEach((items) => {
        if (items.title === item.item_title && items.favItem === true) {
          const itemf = items;
          itemf.favItem = false;
        }
      });
      this.$store.dispatch('removefav', item);
    },
    scrollToAnchor(anchor) {
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(anchor).offset().top,
          },
          1500,
        );
    },
    getdetail(item) {
      const vm = this;
      vm.$router.push(`/detail/${item.item_id}`);
    },
    sendhot() {
      this.$emit('sendhot');
    },
    sendpaper() {
      this.$emit('sendpaper');
    },
    ...mapActions(['getCart']),

    deletCarts(id) {
      this.$store.dispatch('deletCarts', id);
    },
    goCustormer() {
      const vm = this;
      vm.$router.push('/custormerOrder');
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
