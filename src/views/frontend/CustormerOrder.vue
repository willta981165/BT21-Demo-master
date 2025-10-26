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
      <div class="row justify-content-center mt-5">
        <div class="col-5">
          <ul class="breakcrumb">
            <li class="breakcrumb-txt">
              <span class="p-5 text-dark">1</span>
            </li>
            <li class="breakcrumb-txt text-2">
              <span class="p-5">2</span>
            </li>
            <li class="breakcrumb-txt text-3">
              <span class="p-5">3</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center mt-5 no-gutters">
        <div class="col-12 d-flex justify-content-center">
          <h1 class="cart-text">CART</h1>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <img
            src="https://pa1.narvii.com/6754/f71cb711055f2d4d30d7c341f23304515b1a3057_hq.gif"
            alt
            width="150"
            height="100"
          />
        </div>
        <div class="col-md-6 d-flex justify-content-center title-border">
          <table class="table mt-5 mx-6">
            <thead>
              <th></th>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="deletCarts(item)"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
                <td class="align-middle">
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                </td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total }}NTD</td>
              </tr>
            </tbody>
            <tfoot>
              <tr v-if="cart.final_total">
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">{{ cart.total }}NTD</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total ">
                <td colspan="3" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ cart.final_total }}NTD</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-md-5">
          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon_code" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button"
              @click="addcoupon">套用優惠碼</button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mb-5">
        <a href="#/ordercreat" class="btn btn-outline-dark">Creat Order</a>
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

export default {
  data() {
    return {
      cart: {},
      coupon_code: '',
    };
  },
  methods: {
    getCarts() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      $('#loading').css('display', 'block');
      vm.$http.get(url).then((response) => {
        vm.cart = response.data.data;
        $('#loading').css('display', 'none');
      });
    },
    deletCarts(item) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${item.id}`;
      $('#loading').css('display', 'block');
      vm.$http.delete(url).then((response) => {
        if (response.data.success) {
          vm.getCarts();
          $('#loading').css('display', 'none');
        }
      });
    },
    addcoupon() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      $('#loading').css('display', 'block');
      vm.$http.post(url, { data: coupon }).then((response) => {
        if (response.data.success) {
          vm.getCarts();
          vm.coupon_code = '';
          $('#loading').css('display', 'none');
        } else {
          vm.$store.dispatch('updateMessage', {
            message: '請輸入正確優惠碼',
            status: 'danger',
          });
          vm.coupon_code = '';
          $('#loading').css('display', 'none');
        }
      });
    },
  },
  mounted() {
    const vm = this;
    vm.getCarts();
  },
};
</script>
