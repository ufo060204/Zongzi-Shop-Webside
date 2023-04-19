<template>
  <VueLoading :active="isLoading" :color="color" :z-index="9999"/>
  <div class="container-lg">
    <div class="text-end mt-4">
        <button class="btn btn-primary" @click="() => openCouponModal(true)">
          建立新的優惠券
        </button>
      </div>
      <table class="table mt-4 table-responsive">
        <thead>
          <tr>
            <th width="120">名稱</th>
            <th width="120">折扣百分比例</th>
            <th width="120">到期日</th>
            <th width="100">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in coupons" :key="key">
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}</td>
            <!-- <td>{{ $filters.date(item.due_date) }}</td> -->
            <td>{{ dateFilter(item.due_date) }}</td>
            <td>
              <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
              <span v-else class="text-muted" >未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="() => openCouponModal(false,item)"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="() => openDelCouponModal(item)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- couponModal start -->
      <div
      id="couponModal"
      ref="couponModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
      >
      <div class="modal-dialog modal-xl">
        <form @submit.prevent="updateCoupon(tempCoupon)" class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
              <span v-if="isNew">新增優惠券</span>
              <span v-else>編輯優惠券</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title" v-model="tempCoupon.title" placeholder="請輸入標題" required>
            </div>
            <div class="mb-3">
              <label for="coupon_code">優惠碼</label>
              <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code" placeholder="請輸入優惠碼" required>
            </div>
            <div class="mb-3">
              <label for="due_date">期限</label>
              <input type="date" class="form-control" id="due_date" v-model="due_date" required>
            </div>
            <div class="mb-3">
              <label for="price">折扣百分比例</label>
              <input type="number" class="form-control" id="price" min="0" v-model="tempCoupon.percent" placeholder="請輸入折扣百分比" required>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input type="checkbox" :true-value="1" :false-value="0" class="form-check-input" id="is_enabled" v-model="tempCoupon.is_enabled">
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="submit"
              class="btn btn-primary"
            >
              {{ isNew ? "新增優惠券" : "更新優惠券" }}
            </button>
          </div>
        </form>
      </div>
      </div>
      <!-- couponModal start -->
      <!-- delCouponModal start -->
      <div id="delCouponModal" ref="delCouponModal" class="modal fade" tabindex="-1"
            aria-labelledby="delCouponModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="delCouponModalLabel" class="modal-title">
                <span>刪除</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger"></strong> {{ tempCoupon.title }} (刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-danger" @click="() => delCoupon()">
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- delCouponModal end -->
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      coupons: {},
      due_date: '',
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isNew: false,
      color: '#FF700C',
      couponModal: '',
      delCouponModal: ''
    }
  },
  watch: {
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  methods: {
    getCoupon () {
      this.isLoading = true
      const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupons`
      this.$http.get(api, this.tempCoupon)
        .then((res) => {
          this.coupons = res.data.coupons
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire(err.response)
        })
    },
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = { due_date: new Date().getTime() / 1000 }
      } else {
        this.tempCoupon = { ...item }
      }
      this.couponModal.show()
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      this.delCouponModal.show()
    },
    updateCoupon () {
      this.isLoading = true
      let api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupon`
      let method = 'post'
      let data = this.tempCoupon

      if (!this.isNew) {
        api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        method = 'put'
        data = this.tempCoupon
      }
      this.$http[method](api, { data })
        .then((res) => {
          this.isLoading = false
          this.getCoupon()
          this.couponModal.hide()
          Swal.fire(res.data.message)
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire(err.response)
        })
    },
    dateFilter (time) {
      const localDate = new Date(time * 1000)
      return localDate.toLocaleDateString()
    },
    delCoupon () {
      this.isLoading = true
      const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false
          this.getCoupon()
          this.delCouponModal.hide()
          Swal.fire(res.data.message)
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire(err.response)
        })
    }

  },
  mounted () {
    this.getCoupon()
    this.couponModal = new Modal(this.$refs.couponModal)
    this.delCouponModal = new Modal(this.$refs.delCouponModal)
  }
}
</script>
