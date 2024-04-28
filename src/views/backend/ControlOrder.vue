<template>
  <div>
    <div id="loading">
      <img
        src="https://cdn130.picsart.com/261149211002202.gif?to=min&r=640"
        alt="loading.."
        width="100"
      />
    </div>
    <div class="table-responsive-md">
     <table class="table mt-5 table-coupon">
      <thead>
        <tr>
          <th scope="col" width="60">購買時間</th>
          <th scope="col" width="120">Email</th>
          <th scope="col" width="120">購買款項</th>
          <th scope="col" width="50">應付金額</th>
          <th scope="col" width="50">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in Order" :key="key">
          <td>{{ item.create_at | time }}</td>
          <td>
            <span v-text="item.user.email" v-if="item.user"></span>
          </td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td>
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">尚未起用</span>
          </td>
        </tr>
      </tbody>
     </table>
    </div>
    <Pagination :pages="pagination" @emitPages="getOrder"></Pagination>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      pagination: {},
      Order: [],
    };
  },
  methods: {
    getOrder(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      $('#loading').css('display', 'block');
      vm.$http.get(url).then((response) => {
        vm.Order = response.data.orders;
        vm.pagination = response.data.pagination;
        $('#loading').css('display', 'none');
      });
    },
  },
  components: {
    Pagination,
  },
  mounted() {
    this.getOrder();
  },
};
</script>
