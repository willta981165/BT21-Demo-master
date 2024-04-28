<template>
  <div>
    <div id="loading">
      <img
        src="https://cdn130.picsart.com/261149211002202.gif?to=min&r=640"
        alt="loading.."
        width="100"
      />
    </div>
    <div class="content">
    <Navbar :product="products"></Navbar>
    <div class="container">
      <div class="row no-gutters justify-content-center mt-5 pb-5">
        <div class="col-3">
          <div class="d-flex justify-content-center">
            <img
              src="https://media2.giphy.com/media/Kaz4nBr0srkKqOJIxN/giphy.gif"
              width="100"
              height="120"
            />
          </div>
        </div>
        <div class="col-md-9 d-flex align-items-end text-center">
          <p class="shop-title">Welcome to BT21 SHOP</p>
        </div>
      </div>
      <div class="row no-gutters justify-content-center">
        <div class="col-lg-3">
          <ul class="pl-0" v-for="(item) in classify" :key="item.id">
            <li>
              <a href="#" class="classify text-decoration-none"
              @click="getProducts()">{{ item.all}}</a>
            </li>
          </ul>
          <ul class="pl-0" v-for="(item) in Other" :key="item.id">
            <li>
              <a
                href="#"
                class="classify text-decoration-none"
                @click="productslect(item)"
              >{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-9">
          <div class="row" v-if="change === true">
            <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
              <div class="card border-0 shadow-sm overflow-hidden">
                <div
                  class="card-img"
                  style="height: 150px; background-size: cover;
                   background-position: center center;"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"
                ></div>
                <div class="card-body">
                  <h5 class="card-title">
                    <p class="text-dark">{{ item.title }}</p>
                  </h5>
                  <span class="badge badge-secondary">{{ item.category }}</span>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!item.price">NTD{{ item.origin_price }}</div>
                    <del class="h6" v-if="item.price">NTD{{ item.origin_price }}</del>
                    <div class="h5" v-if="item.price">NTD{{ item.price }}</div>
                  </div>
                </div>
                <div class="card-footer d-flex">
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-sm"
                    @click="getdetail(item)"
                  >查看更多</button>
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-sm ml-auto"
                    @click="addCar(item.id)"
                  >加到購物車</button>
                </div>
                <button
                  type="button"
                  class="btn btn-dark"
                  @click="setlocal(item)"
                  v-if="item.favItem === false"
                >
                  <i class="far fa-heart fa-2x"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  @click="removelocal(item)"
                  v-if="item.favItem === true"
                >
                  <i class="fas fa-heart fa-2x"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row" v-if="change === false">
            <div class="col-md-4 mb-4" v-for="item in select" :key="item.id">
              <div class="card border-0 shadow-sm overflow-hidden">
                <div
                  class="card-img"
                  style="height: 150px; background-size: cover; background-position: center"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"
                ></div>
                <div class="card-body">
                  <h5 class="card-title">
                    <p class="text-dark">{{ item.title }}</p>
                  </h5>
                  <span class="badge badge-secondary">{{ item.category }}</span>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!item.price">NTD{{ item.origin_price }}</div>
                    <del class="h6" v-if="item.price">NTD{{ item.origin_price }}</del>
                    <div class="h5" v-if="item.price">NTD{{ item.price }}</div>
                  </div>
                </div>
                <div class="card-footer d-flex">
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-sm"
                    @click="getdetail(item)"
                  >查看更多</button>
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-sm ml-auto"
                    @click="addCar(item.id)"
                  >加到購物車</button>
                </div>
                <button
                  type="button"
                  class="btn btn-dark"
                  @click="setlocal(item)"
                  v-if="item.favItem === false"
                >
                  <i class="far fa-heart fa-2x"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  @click="removelocal(item)"
                  v-if="item.favItem === true"
                >
                  <i class="fas fa-heart fa-2x"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
     <div class="footer">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-4 text-center">
            <img
              src="https://cdn130.picsart.com/261149211002202.gif?to=min&r=640"
              width="60"
              height="60"
              class="d-inline-block align-top"
              alt
            />
            <div class="navbar-brand">
              <h1 class="font-weight-bold">BT21</h1>
            </div>
            <div class="row justify-content-center align-items-center footer-icon">
              <div class="col-md-10">
                <ul>
                  <li>
                    <a href="#" class="mr-3 github">
                      <h4 class="fab fa-github"></h4>
                    </a>
                    <a href="#" class="mr-3 facebook">
                      <h4 class="fab fa-facebook-f"></h4>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="mr-2 ml-1 instagram">
                      <h4 class="fab fa-instagram"></h4>
                    </a>
                    <a href="#" class="mr-3 ml-1 twitter">
                      <h4 class="fab fa-twitter"></h4>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 text-center my-5">僅個人練習使用，不做任何商業用途</div>
          <div class="col-md-4 text-center">
            <h1 class="font-weight-bold ml-3">Contact Us</h1>
            <div class="footer-address">
              <p>TEL： 0912345678</p>
              <p>Mail：BT21SHOP@mail.com</p>
              <p>地址： 地球上的某一個角落</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import $ from 'jquery';
import Navbar from '../../components/Navbar.vue';

export default {
  data() {
    return {
      temp: [],
      cart: {
        length: '',
      },
      products: [],
      select: [],
      change: true,
      classify: [{ all: 'ALL' }],
      Other: [
        { name: 'Hot ltem' },
        { name: 'Apparel' },
        { name: 'Footwear' },
        { name: 'Accessories' },
        { name: 'Others' },
      ],
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.change = true;
      $('#loading').css('display', 'block');
      vm.$http.get(url).then((response) => {
        vm.products = response.data.products;
        vm.products.forEach((el) => {
          vm.$set(el, 'favItem', false);
        });

        const localdata = JSON.parse(localStorage.getItem('items') || '[]');
        let localtitle = '';
        localdata.forEach((item) => {
          localtitle = item.item_title;
          vm.products.forEach((items) => {
            if (localtitle === items.title) {
              const itemt = items;
              itemt.favItem = true;
            }
          });
        });
        $('#loading').css('display', 'none');
      });
    },
    getdetail(item) {
      const vm = this;
      vm.$router.push(`/detail/${item.id}`);
    },
    productslect(item) {
      const vm = this;
      vm.change = false;
      const select = vm.products.filter((items) => items.category === item.name);
      vm.select = select;
    },
    addCar(id, qty = 1) {
      this.$store.dispatch('addCar', { id, qty });
    },
    setlocal(item) {
      if (item.favItem === false) {
        const itemt = item;
        itemt.favItem = true;
      }
      this.$store.dispatch('setlocal', item);
    },
    removelocal(item) {
      if (item.favItem === true) {
        const itemt = item;
        itemt.favItem = false;
      }
      this.$store.dispatch('remove', item);
    },
  },
  components: {
    Navbar,
  },
  mounted() {
    this.getProducts();
  },
};
</script>
