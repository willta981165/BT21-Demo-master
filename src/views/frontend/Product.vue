<template>
  <div>
    <div id="loading">
      <img
        src="https://i.pinimg.com/originals/f6/ce/0e/f6ce0eddadaff51331fe2367cc591d7b.gif"
        alt="loading.."
        width="100"
      />
    </div>
    <div class="content">
    <div class="container">
      <div class="row justify-content-center mb-5 mt-5">
        <div class="col-md-10 title-border mx-5">
          <div class="row justify-content-center py-6">
            <div class="col-md-6">
              <div>
                <img :src="product.imageUrl" class="product-img" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mt-5 title-pd">
                <h2 class="d-inline">{{ product.category }} / {{ product.title }}</h2>
              </div>
              <div v-if="product.description">
                <ul class="mt-5 pb-6">
                  <li>
                    <i class="fas fa-star"></i>
                    {{ product.description }}</li>
                     <li>
                    <i class="fas fa-star"></i>
                    {{ product.content }}</li>
                </ul>
              </div>
              <div class="newBtn">
               <button class="p-less" @click="less()">
                  <i aria-hidden="true" class="fas fa-minus" style="margin-right: 3px;"></i>
               </button>
               <input type="number" max="10" min="1" class="p-input" v-model="product.num"
                style="border-radius: 0px;">
                <button class="p-add" @click="add()">
                <i aria-hidden="true" class="fas fa-plus"></i>
                </button>
              </div>
              <div class="mt-5">
                <h5>Price: {{product.price}}NTD/1{{product.unit}}</h5>
              </div>
              <div class="mt-5">
                <h5>Total: {{product.price*product.num}}NTD</h5>
              </div>
              <button
                type="buttom"
                class="btn btn-lg btn-dark btn-size mt-4 mb-4 mr-5"
                @click="addCar(product.id, product.num)"
              >ADD TO CART</button>
              <a
                href="#/shop"
                class="btn btn-outline-dark btn-size"
              >back</a>
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
</template>>

<script>
import $ from 'jquery';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      product: {},
    };
  },
  computed: {
    ...mapGetters(['cart']),
  },
  methods: {
    addCar(id, qty = 1) {
      this.$store.dispatch('addCar', { id, qty });
    },
    getCart() {
      this.$store.dispatch('getCart');
    },
    getProduct() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.itemId}`;
      $('#loading').css('display', 'block');
      vm.$http.get(url).then((response) => {
        vm.product = response.data.product;
        vm.$set(vm.product, 'num', 1);
        $('#loading').css('display', 'none');
      });
    },
    add() {
      const vm = this;
      vm.product.num += 1;
    },
    less() {
      const vm = this;
      vm.product.num -= 1;
      if (vm.product.num <= 0) {
        vm.product.num = 0;
      }
    },
  },
  mounted() {
    this.itemId = this.$route.params.itemID;
    this.getCart();
    this.getProduct();
  },
};
</script>
