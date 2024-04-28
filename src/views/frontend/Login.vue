<template>
  <div>
    <div id="loading">
      <img
        src="https://cdn130.picsart.com/261149211002202.gif?to=min&r=640"
        alt="loading.."
        width="100"
      />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 d-flex justify-content-center">
          <div class="card login-card" style="width: 18rem;">
            <img
              src="https://media1.giphy.com/media/WrydB29JptO2974K4e/giphy.gif"
              style="height: 260px"
            />
            <div class="card-body text-center">
              <h1 class="h3 mb-3 font-weight-normal">Please login first</h1>
              <label for="inputEmail" class="sr-only">Email address</label>
              <input
                type="email"
                id="inputEmail"
                v-model="user.username"
                class="form-control mb-2"
                placeholder="Email address"
                required
              />
              <label for="inputPassword" class="sr-only">Password</label>
              <input
                type="password"
                id="inputPassword"
                v-model="user.password"
                class="form-control"
                placeholder="Password"
                required
              />
              <button
                class="btn btn-primary mt-3 btn-block"
                type="submit"
                @keyup.enter="signin()"
                @click="signin()"
              >Sigh in</button>
              <a
                href="#/"
                class="btn btn-outline-primary mt-3 btn-block"
                type="submit"
              >Back</a>
              <div class="mt-1">© 2020 Welcome to BT21</div>
            </div>
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
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      $('#loading').css('display', 'block');
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/control/product');
        } else {
          $('#loading').css('display', 'none');
          vm.$store.dispatch('updateMessage', {
            message: '"帳號或密碼有錯 請重新輸入',
            status: 'danger',
          });
        }
      });
    },
  },
};
</script>
