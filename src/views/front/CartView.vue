<template>
  <section class="landing-img landing-header" />
  <VueLoading :active="isLoading" :color="color" :z-index="9999"/>
  <section class="bg-bg py-8 h-100">
    <div class="container h-100">
      <div v-if="cart.length === 0" class="row h-100">
        <div class="col-6 offset-3 text-center my-auto">
          <div style="background-color: #F99;" class="d-flex justify-content-center align-items-center text-white py-2 mb-3">
            <span class="material-symbols-outlined me-3">
              warning
            </span>
            <p class="fs-5">您的購物車中沒有商品</p>
          </div>
          <router-link to="/products" class="btn btn-outline-text-light py-2 px-2 fs-5 fw-bold">前往購物</router-link>
        </div>
      </div>
      <div v-else>
        <ul class="list-unstyled d-md-flex justify-content-center text-center">
          <li class="bg-white border border-boderlight py-3 px-7">確認商品</li>
          <li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li>
          <li class="border border-boderlight py-3 px-7">填寫資料</li>
          <li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li>
          <li class="border border-boderlight py-3 px-7">確認付款</li>
          <li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li>
          <li class="border border-boderlight py-3 px-7">完成付款</li>
        </ul>
        <div class="text-end mb-3">
          <button class="btn btn-outline-danger rounded-0" type="button" @click="() => deleteAllCart()">
            清空購物車
          </button>
        </div>
        <div class="text-center container-lg border border-white border-2 mb-3">
          <ul class="bg-text-dark list-unstyled row mobile-cart mb-0">
            <li class="fs-5 fw-bold text-white py-2 col-4 border-end border-white">圖片</li>
            <li class="fs-5 fw-bold text-white py-2 col-2 border-end border-white">品名</li>
            <li class="fs-5 fw-bold text-white py-2 col-2 border-end border-white">單價</li>
            <li class="fs-5 fw-bold text-white py-2 col-1 border-end border-white">數量</li>
            <li class="fs-5 fw-bold text-white py-2 col-2 border-end border-white">小計</li>
            <li class="fs-5 fw-bold text-white py-2 col-1">刪除</li>
          </ul>
          <template v-if="cart">
            <ul class="fs-4 list-unstyled row align-items-center border-bottom py-3 mb-0 border-white" v-for="item in cart" :key="item.id">
              <li class="col-md-4 col-6">
                <img :src="item.product.imageUrl" class="table-image" alt="imageUrl">
              </li>
              <div class="col-md-8 col-6">
                <div class="row align-items-center">
                  <li class="col-md-3 my-1">
                    {{ item.product.title }}
                    <span class="text-success d-block fs-6" v-if="item.coupon">已套用優惠券</span>
                  </li>
                  <li class="col-md-3 my-1">NT$ {{ item.product.price }}</li>
                  <li class="col-md my-1">
                    <div class="input-group input-group-sm">
                      <select name="" id="" class="form-control text-center" v-model="item.qty" @change="_$event =>updateCartItem(item)" v-bind:disabled="item.id === loadingItem">
                        <option :value="i" v-for="i in 100" :key="i + '1234'">{{ i }}</option>
                      </select>
                    </div>
                  </li>
                  <li class="fw-bold col-md-3 my-1" v-if="this.total === this.final_total">
                    NT$ {{ item.total }}
                  </li>
                  <li class="fw-bold col-md-3 my-1" v-if="this.total !== this.final_total">
                    NT$ {{ item.final_total }} <span class="fs-6 text-decoration-line-through">{{ item.total }}</span>
                  </li>
                  <li class="col-md my-1">
                    <button type="button" class="btn btn-outline-text-dark btn-sm" @click="() => deleteCartItem(item)"
                    v-bind:disabled="item.id === loadingItem">
                      <i class="fas fa-spinner fa-pulse" v-if="loadingItem === item.id"></i>
                      x
                    </button>
                  </li>
                </div>
              </div>
            </ul>
          </template>
          <ul class="list-unstyled row py-3 mb-0">
            <li class="col-lg-7"></li>
            <li class="col-lg-5">
              <div class="input-group">
                <input type="text" class="form-control rounded-0 py-2" placeholder="請輸入優惠代碼" v-model="couponCode">
                <button type="btn" class="btn btn-outline-zongzi rounded-0" @click="() => checkCoupon()">套用優惠碼</button>
              </div>
            </li>
          </ul>
          <ul class="list-unstyled row mb-0">
            <li class="col-lg-8 py-2 mobile-cart"></li>
            <li class="col-lg-2 col-6 py-2 bg-text-dark text-white fw-bolder fs-4 d-flex align-items-center justify-content-center">
              總計
            </li>
            <li v-if="this.total === this.final_total" class="col-lg-2 py-2 col-6 text-end fs-4 fw-bolder text-black bg-white">NT$ {{ total }}</li>
            <li v-if="this.total !== this.final_total" class="col-lg-2 py-2 col-6 text-end fs-4 fw-bolder text-black bg-white">NT$ <span class="text-danger fs-3">{{ final_total }}</span> <span class="fs-5 text-decoration-line-through"> {{ total }}</span></li>
          </ul>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <router-link to="/products" class="text-decoration-none btn btn-outline-text-light rounded-0"><i class="bi bi-arrow-left"></i>上一頁</router-link>
          <router-link to="/checkout" class="text-decoration-none btn btn-outline-text-light rounded-0">下一步<i class="bi bi-arrow-right"></i></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cart'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      productId: '',
      loadingItem: '',
      couponCode: '',
      isLoading: false,
      color: '#FF700C',
      form: {
        user: {
          name: '',
          mail: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['cart', 'total', 'final_total'])
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    updateCartItem (item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      this.$http
        .put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.getCarts()
          this.loadingItem = ''
          Swal.fire({
            icon: 'success',
            title: '已更新數量',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          Swal.fire(err.data.message)
        })
    },
    checkCoupon () {
      const data = {
        code: this.couponCode
      }
      const api = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/coupon`
      this.$http.post(api, { data })
        .then((res) => {
          if (res.data.success === true) {
            Swal.fire(
              '套用成功',
              '已套用優惠券 zongzi40',
              'success'
            )
          } else if (res.data.success === false) {
            Swal.fire({
              icon: 'error',
              title: '套用失敗',
              text: '找不到優惠券QQ',
              footer: '<a href="https://ufo060204.github.io/Zongzi-Shop-Webside/#/home/-NR8JzTIYKZ08sSYBdjQ">前往領取優惠碼'
            })
          }
          this.getCarts()
        })
        .catch((err) => {
          Swal.fire(err.response.data.message)
        })
    },
    ...mapActions(cartStore, ['deleteCartItem']),
    deleteAllCart () {
      Swal.fire({
        title: '刪除確認?',
        text: '確定要清除購物車的所有商品嗎？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '是的'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http
            .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
            .then((res) => {
              this.getCarts()
              Swal.fire(
                '刪除成功',
                '購物車的商品已清空',
                'success'
              )
            })
            .catch((err) => {
              Swal.fire(err.data.message)
            })
        }
      })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>

<style>
  .table-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .add-cart-text {
    background-color: #FF700C;
  }
  .add-cart-text:hover {
    background-color: #BD5309;
  }
</style>
