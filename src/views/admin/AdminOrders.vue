<template>
  後台訂單列表
  <VueLoading :active="isLoading" :color="color" :z-index="9999"/>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">時間</th>
          <th width="120">email</th>
          <th width="120">款項</th>
          <th width="120">金額</th>
          <th width="100">是否付款</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in orders" :key="key">
          <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
            <!-- <td>{{ $filters.date(item.create_at) }}</td> -->
            <td>{{ dateFilter(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td class="text-end">
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ item.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input type="checkbox" class="form-check-input" :id="`paid_switch${item.id}`" v-model="item.is_paid" @change="() => updatePaid(item)">
              </div>
              <span v-if="item.is_paid" >已付款</span>
              <span v-else >未付款</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="() => openOrderModal(item)"
                >
                  檢視
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="() => openDelModal(item)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <!-- OrderModal start -->
    <div
    id="productModal"
    ref="orderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>訂單細節</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th>姓名</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單內容</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th>訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>
                      {{ dateFilter(tempOrder.create_at) }}
                      <!-- {{ $filters.date(tempOrder.create_at )}} -->
                    </td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                        <!-- {{ $filters.date(tempOrder.paid_date) }} -->
                        {{ dateFilter(tempOrder.paid_date) }}
                      </span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-success">已付款</strong>
                      <span v-else class="text-muted">未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <!-- <td>{{ $filters.currency(tempOrder.total) }}</td> -->
                    <td>{{ tempOrder.total }}</td>
                  </tr>
                </tbody>
                <h3>選購商品</h3>
                <table class="table">
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in tempOrder.products" :key="item.id">
                      <th>{{ item.product.title }}</th>
                      <td>{{ item.qty }} / {{ item.product.unit }}</td>
                      <!-- <td class="text-end">{{ $filters.currency(item.final_total) }}</td> -->
                      <td class="text-end">{{ item.final_total }}</td>
                    </tr>
                  </tbody>
                </table>
                <div   class="d-flex justify-content-end">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="tempOrder.is_paid">
                    <label class="form-check-label" for="flexCheckDefault">
                      <span v-if="tempOrder.is_paid">已付款</span>
                      <span v-else>未付款</span>
                    </label>
                  </div>
                </div>
              </table>
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
            type="button"
            class="btn btn-primary"
            @click="() => updatePaid(tempOrder)"
          >
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
    </div>
    <!-- OrderModal end -->
    <!-- delOrderModal start -->
    <div id="delOrderModal" ref="delOrderModal" class="modal fade" tabindex="-1"
          aria-labelledby="delOrderModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delOrderModalLabel" class="modal-title">
            <span>刪除</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="() => delOrder()">
            確認刪除
          </button>
        </div>
      </div>
      </div>
    </div>
    <!-- delOrderModal end -->
    <BackPagination :pages="page" @emitPages="getOrder"></BackPagination>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
import BackPagination from '../../components/BackPagination.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      orders: {},
      isNew: false,
      isLoading: false,
      tempOrder: {},
      page: 1,
      color: '#FF700C',
      orderModal: '',
      delOrderModal: ''
    }
  },
  components: {
    BackPagination
  },
  methods: {
    getOrder (page = 1) {
      this.page = page
      const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      this.$http.get(api, this.tempOrder)
        .then((res) => {
          this.orders = res.data.orders
          this.page = res.data.pagination
          console.log(this.orders)
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          alert(err.response)
        })
    },
    openOrderModal (item) {
      this.orderModal.show()
      this.isNew = false
      this.tempOrder = { ...item }
      // const orderComponent = this.$refs.orderModal
    },
    openDelModal (item) {
      this.delOrderModal.show()
      this.tempOrder = { ...item }
    },
    updatePaid (item) {
      this.isLoading = true
      const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(api, { data: paid })
        .then((res) => {
          this.isLoading = false
          console.log(res.data.message)
          alert(res.data.message)
          this.getOrder()
          this.orderModal.hide()
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err.response)
        })
    },
    delOrder () {
      const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false
          console.log(res.data.message)
          alert(res.data.message)
          this.getOrder(this.page)
          this.delOrderModal.hide()
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    dateFilter (time) {
      const localDate = new Date(time * 1000)
      return localDate.toLocaleDateString()
    }
  },
  mounted () {
    this.getOrder()
    this.orderModal = new Modal(this.$refs.orderModal)
    // this.orderModal.show()
    this.delOrderModal = new Modal(this.$refs.delOrderModal)
    // this.delOrderModal.show()
  }
}
</script>
