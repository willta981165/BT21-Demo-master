<template>
  <div>
    <div class="sidebar-sticky side">
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center
        px-3 mt-4 mb-1 text-muted"
      >
        <span>管理者</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/control/product" exact>產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/control/order">訂單列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/control/coupon">優惠卷</router-link>
        </li>
      </ul>
      <div class="text-center">
        <button @click="signout()" type="button" class="btn btn-primary my-6">
          <h5 class="mb-0">
            <i class="fas fa-sign-out-alt text-white fa-lg"></i>
          </h5>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      const vm = this;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/login');
        }
      });
    },
  },
};
</script>
