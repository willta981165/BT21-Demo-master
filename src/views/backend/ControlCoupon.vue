<template>
  <div>
    <div id="loading">
      <img
        src="https://cdn130.picsart.com/261149211002202.gif?to=min&r=640"
        alt="loading.."
        width="100"
      />
    </div>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openmodel(true)">Create New</button>
    </div>
   <div class="table-responsive-md">
    <table class="table mt-4 table-coupon">
      <thead>
        <tr>
          <th scope="col" width="120">名稱</th>
          <th scope="col" width="100">折扣百分比</th>
          <th scope="col" width="50">到期日</th>
          <th scope="col" width="80">是否啟用</th>
          <th scope="col" width="50">編輯</th>
          <th scope="col" width="50">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>
            <span>{{ item.due_date | time }}</span>
          </td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未起用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click.prevent="openmodel(false, item)"
            >編輯</button>
          </td>
          <td>
            <button class="btn btn-outline-danger btn-sm"
            @click.prevent="delmodal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
     </table>
    </div>
    <Pagination :pages="pagination" @emitPages="getCoupons"></Pagination>

    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">優惠卷</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="tempCoupon.title"
                placeholder="請輸入標題"
              />
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input
                type="text"
                class="form-control"
                id="coupon_code"
                v-model="tempCoupon.code"
                placeholder="請輸入優惠碼"
              />
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input type="date" class="form-control" id="dueDate" v-model="new_date" />
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input
                type="number"
                class="form-control"
                id="price"
                v-model="tempCoupon.percent"
                placeholder="請輸入折扣百分比"
              />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled"
                  id="is_enabled"
                />
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="updateCoupons()">更新優惠券</button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="delModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠卷</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠卷(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click.prevent="delcoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      new_date: new Date(),
      newone: false,
      pagination: {},
    };
  },
  methods: {
    getCoupons(page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      const vm = this;
      $('#loading').css('display', 'block');
      vm.$http.get(url).then((response) => {
        vm.pagination = response.data.pagination;
        vm.coupons = response.data.coupons;
        $('#loading').css('display', 'none');
      });
    },
    updateCoupons() {
      let url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      const vm = this;
      let httpMethod = 'post';
      if (vm.newone === false) {
        url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = 'put';
      }
      vm.$http[httpMethod](url, { data: vm.tempCoupon }).then((response) => {
        if (response.data.success) {
          vm.getCoupons();
          $('#couponModal').modal('hide');
        } else {
          vm.getCoupons();
          $('#couponModal').modal('hide');
        }
      });
    },
    openmodel(change, item) {
      const vm = this;
      if (change) {
        vm.tempCoupon = {};
        $('#couponModal').modal('show');
        vm.newone = true;
      } else if (!change) {
        vm.tempCoupon = { ...item };
        $('#couponModal').modal('show');
        vm.newone = false;
      }
    },
    delmodal(item) {
      const vm = this;
      vm.tempCoupon = item;
      $('#delModal').modal('show');
    },
    delcoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          $('#delModal').modal('hide');
          vm.getCoupons();
        }
      });
    },
  },
  components: {
    Pagination,
  },
  watch: {
    new_date() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.new_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
