<template>
  <section class="landing-img landing-header"></section>
  <section class="bg-bg">
    <div class="container-lg">
      <main class="py-8">
        <div v-if="cart.length === 0" class="row d-flex align-items-center justify-content-center">
          <div class="col-6 d-flex align-items-center justify-content-center flex-column py-6 border border-text-light bg-bg">
            <h1 class="fs-2">購物車</h1>
            <img class="my-6 img-fluid" style="height: 150px;" src="../../assets/images/SignWarning.png" alt="SignWarning">
            <h2 class="fs-4">您的購物車中沒有商品</h2>
            <router-link to="/products" class="btn btn-primary d-inline-block text-white py-3 px-7 fs-5 fw-bold text-decoration-none ">前往購物</router-link>
          </div>
        </div>
        <div v-else>
          <ul class="list-unstyled d-md-flex justify-content-center">
            <li class="bg-white border border-boderlight py-3 px-7">確認商品</li>
            <li class="border border-boderlight py-3 px-7">填寫資料</li>
            <li class="border border-boderlight py-3 px-7">確認付款</li>
            <li class="border border-boderlight py-3 px-7">完成付款</li>
          </ul>
          <div class="text-end">
            <button class="btn btn-outline-danger" type="button" @click="() => deleteAllCart()">
              清空購物車
            </button>
          </div>
          <div class="table-responsive">
            <table class="table align-middle table-bordered border-white text-center">
              <thead>
                <tr class="fs-5">
                  <th class="bg-text-dark text-white">圖片</th>
                  <th class="bg-text-dark text-white">品名</th>
                  <th class="bg-text-dark text-white">單價</th>
                  <th class="bg-text-dark text-white">數量</th>
                  <th class="bg-text-dark text-white">小計</th>
                  <th class="bg-text-dark text-white"></th>
                </tr>
              </thead>
              <tbody>
                <template v-if="cart">
                  <tr class="fs-4" v-for="item in cart" :key="item.id">
                    <td>
                      <img :src="item.product.imageUrl" class="table-image" alt="imageUrl">
                    </td>
                    <td>
                      {{ item.product.title }}
                      <span class="text-success fs-6" v-if="item.coupon">已套用優惠券</span>
                    </td>
                    <td>NT$ {{ item.product.price }}</td>
                    <td>
                      <div class="input-group input-group-sm">
                        <select name="" id="" class="form-control text-center" v-model="item.qty" @change="_$event =>updateCartItem(item)" v-bind:disabled="item.id === loadingItem">
                          <option :value="i" v-for="i in 20" :key="i + '1234'">{{ i }}</option>
                        </select>
                      </div>
                    </td>
                    <td class="fw-bold" v-if="this.total === this.final_total">
                      NT$ {{ item.total }}
                    </td>
                    <td class="fw-bold" v-if="this.total !== this.final_total">
                      NT$ {{ item.final_total }} <span class="fs-6 text-decoration-line-through">{{ item.total }}</span>
                    </td>
                    <td>
                      <button type="button" class="btn btn-outline-danger btn-sm" @click="() => deleteCartItem(item)"
                      v-bind:disabled="item.id === loadingItem">
                        <i class="fas fa-spinner fa-pulse" v-if="loadingItem === item.id"></i>
                        x
                      </button>
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2">
                    <input type="text" class="form-control" placeholder="請輸入優惠代碼" v-model="couponCode">
                  </td>
                  <td colspan="1">
                    <button type="btn" class="btn btn-outline-zongzi w-100" @click="() => checkCoupon()">使用優惠券</button>
                  </td>
                  <td class="bg-text-dark text-white fw-bolder fs-4">總計</td>
                  <td v-if="this.total === this.final_total" colspan="2" class="text-end fs-4 fw-bolder text-black bg-white">NT$ {{ total }}</td>
                  <td v-if="this.total !== this.final_total" colspan="2" class="text-end fs-4 fw-bolder text-black bg-white">NT$ <span class="text-danger fs-3">{{ final_total }}</span> <span class="fs-5 text-decoration-line-through"> {{ total }}</span></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="d-md-flex justify-content-md-between align-items-md-center">
            <router-link to="/products" class="text-decoration-none btn btn-outline-text-light"><i class="bi bi-arrow-left"></i>上一頁</router-link>
            <router-link to="/checkout" class="text-decoration-none btn btn-outline-text-light">下一步<i class="bi bi-arrow-right"></i></router-link>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
<style>
  .table-image {
    max-width: 200px;
    max-height: 200px;
    object-fit: cover;
  }
  .add-cart-text {
    background-color: #FF700C;
  }
  .add-cart-text:hover {
    background-color: #BD5309;
  }
</style>
<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '../../stores/cart'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      productId: '',
      // cart: {},
      loadingItem: '',
      couponCode: '',
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
          // alert(res.data.message)
          Swal.fire({
            icon: 'success',
            title: '已更新數量',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    checkCoupon () {
      const data = {
        code: this.couponCode
      }
      const api = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/coupon`
      this.$http.post(api, { data })
        .then((res) => {
          alert(res.data.message)
          this.getCarts()
          // console.log(res)
        })
        .catch((err) => {
          console.log(err.data.message)
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
              // alert(res.data.message)
              // Swal.fire({
              //   icon: 'success',
              //   title: '刪除全部品項成功',
              //   showConfirmButton: false,
              //   timer: 1500
              // })
            })
            .catch((err) => {
              alert(err.data.message)
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
