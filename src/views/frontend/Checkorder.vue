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
            <li class="breakcrumb-txt text-2">
              <span class="p-5">1</span>
            </li>
            <li class="breakcrumb-txt text-2">
              <span class="p-5">2</span>
            </li>
            <li class="breakcrumb-txt">
              <span class="p-5 text-dark">3</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center mt-5 no-gutters">
        <div class="col-12 d-flex justify-content-center">
          <h1 class="cart-text">COMPLETE</h1>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <img src="https://www.bt21.com/im/character/bt21/rj.gif" alt width="200" height="100" />
        </div>
        <div class="col-md-6 d-flex justify-content-center title-border">
          <form class="col-md-10 mt-5" @submit.prevent="payOrder">
            <table class="table">
              <thead>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
              </thead>
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td class="align-middle">{{ item.product.title }}</td>
                  <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                  <td class="align-middle text-right">{{ item.final_total }}NTD</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="text-right">總計</td>
                  <td class="text-right">{{ order.total }}NTD</td>
                </tr>
              </tfoot>
            </table>

            <table class="table">
              <tbody>
                <tr>
                  <th width="100">Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>
                    <span v-if="!order.is_paid">Not paid yet</span>
                    <span v-else class="text-success">
                      Payment Completed
                      <a
                        href="#/"
                        class="btn btn-dark ml-5"
                        style="font-size:13px;"
                      >Back</a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-right my-5" v-if="order.is_paid === false">
              <button class="btn btn-dark">Payment</button>
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
    <div
      class="modal fade"
      id="ProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>付款完成 訂單已建立</span>
            </h5>
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
      order: {
        user: '',
      },
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.OrderId}`;
      vm.$http.get(url).then((response) => {
        vm.order = response.data.order;
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.OrderId}`;
      $('#loading').css('display', 'block');
      vm.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.getOrder();
          $('#loading').css('display', 'none');
        }
        $('#ProductModal').modal('show');
        setTimeout(() => {
          $('#ProductModal').modal('hide');
        }, 2000);
      });
    },
  },
  mounted() {
    this.OrderId = this.$route.params.OrderId;
    this.getOrder();
  },
};
</script>
