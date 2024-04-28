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
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-5">
          <ul class="breakcrumb">
            <li class="breakcrumb-txt text-2">
              <span class="p-5">1</span>
            </li>
            <li class="breakcrumb-txt">
              <span class="p-5 text-dark">2</span>
            </li>
            <li class="breakcrumb-txt text-3">
              <span class="p-5">3</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center mt-5 no-gutters">
        <div class="col-12 d-flex justify-content-center">
          <h1 class="cart-text">INFORMATION</h1>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <img src="https://www.bt21.com/im/character/bt21/van.gif" alt width="200" height="100" />
        </div>
        <div class="col-md-6 d-flex justify-content-center title-border">
          <form class="col-md-11 my-5" @submit.prevent="creatOrder">
            <div class="form-group">
              <label for="useremail">Email(必填)</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="useremail"
                v-validate="'required|email'"
                v-model="form.user.email"
                placeholder="請輸入 Email"
                :class="{'is-invalid': errors.has('email')}"
              />
              <span class="text-danger"
              v-if="errors.has('email')">{{ errors.first('email') }}</span>
            </div>

            <div class="form-group">
              <label for="username">收件人姓名(必填)</label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="username"
                :class="{'is-invalid': errors.has('name')}"
                v-model="form.user.name"
                v-validate="'required'"
                placeholder="輸入姓名"
              />
              <span class="text-danger" v-if="errors.has('name')">請輸入姓名</span>
            </div>

            <div class="form-group">
              <label for="usertel">收件人電話(必填)</label>
              <input
                type="tel"
                class="form-control"
                name="num"
                id="usertel"
                :class="{'is-invalid': errors.has('num')}"
                v-model="form.user.tel"
                v-validate="'required'"
                placeholder="請輸入電話"
              />
              <span class="text-danger" v-if="errors.has('num')">請輸入電話</span>
            </div>

            <div class="form-group">
              <label for="useraddress">收件人地址(必填)</label>
              <input
                type="address"
                class="form-control"
                name="address"
                id="useraddress"
                :class="{'is-invalid': errors.has('address')}"
                v-model="form.user.address"
                v-validate="'required'"
                placeholder="請輸入地址"
              />
              <span class="text-danger" v-if="errors.has('address')">請輸入地址</span>
            </div>

            <div class="form-group">
              <label for="useraddress">留言</label>
              <textarea name id class="form-control" cols="30" rows="10"
              v-model="form.message"></textarea>
            </div>
            <div class="text-right">
              <button class="btn btn-dark">送出訂單</button>
            </div>
          </form>
        </div>
      </div>
    </div>
     </div>
    <div class="footer mt-5">
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
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
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
    creatOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      $('#loading').css('display', 'block');
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$http.post(url, { data: order }).then((response) => {
            vm.getCarts();
            if (response.data.success) {
              vm.$router.push(`/checkorder/${response.data.orderId}`);
            }
          });
        } else {
          vm.$store.dispatch('updateMessage', {
            message: '欄位不完整',
            status: 'danger',
          });
        }
        $('#loading').css('display', 'none');
      });
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>
