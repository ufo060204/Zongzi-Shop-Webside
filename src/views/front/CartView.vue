<template>
  <section class="landing-img landing-header"></section>
  <section class="bg-bg">
    <div class="container-md">
      <main class="py-8">
        <div v-if="cart.length === 0" class="row d-flex align-items-center justify-content-center">
          <div class="col-6 d-flex align-items-center justify-content-center flex-column py-6 border border-text-dark bg-bg">
            <h1>購物車</h1>
            <img class="my-6" style="height: 150px;" src="../../assets/images/SignWarning.png" alt="SignWarning">
            <h2>您的購物車中沒有商品</h2>
            <router-link to="/products" class="add-cart-text d-inline-block text-white py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark">前往購物</router-link>
          </div>
        </div>
        <div v-else>
          <ul class="list-unstyled d-md-flex justify-content-center">
            <li class="bg-primary py-3 px-7 me-6">確認商品</li>
            <li style="background-color: #FFE8D9;" class="py-3 px-7 me-6">填寫資料</li>
            <li style="background-color: #FFE8D9;" class="py-3 px-7 me-6">確認付款</li>
            <li style="background-color: #FFE8D9;" class="py-3 px-7">完成付款</li>
          </ul>
          <div class="text-end">
            <button class="btn btn-outline-danger" type="button" @click="() => deleteAllCart()">
              清空購物車
            </button>
          </div>
          <table class="table align-middle table-borderless text-center">
            <thead>
              <tr class="fs-5">
                <th></th>
                <th>圖片</th>
                <th>品名</th>
                <th style="width: 150px">數量/單位</th>
                <th>單價</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody class="border-bottom border-top border-text-dark border-2">
              <template v-if="cart">
                <tr class="fs-4" v-for="item in cart" :key="item.id">
                  <td width="100">
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="() => deleteCartItem(item)"
                    v-bind:disabled="item.id === loadingItem">
                      <i class="fas fa-spinner fa-pulse" v-if="loadingItem === item.id"></i>
                      x
                    </button>
                  </td>
                  <td width="100">
                    <img :src="item.product.imageUrl" class="table-image" alt="imageUrl">
                  </td>
                  <td>
                    {{ item.product.title }}
                    <!-- <div class="text-success">已套用優惠券</div> -->
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <select name="" id="" class="form-control" v-model="item.qty" @change="_$event =>updateCartItem(item)" v-bind:disabled="item.id === loadingItem">
                        <option :value="i" v-for="i in 20" :key="i + '1234'">{{ i }}</option>
                      </select>
                    </div>
                  </td>
                  <td>NT$ {{ item.product.price }}</td>
                  <td class="fw-bold">
                    <!-- <small class="text-success">折扣價：</small> -->
                    NT$ {{ item.total }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <!-- <td colspan="5" class="text-end"></td> -->
                <td colspan="6" class="text-end fs-4 fw-bolder text-primary">總計：NT$ {{ total }}</td>
              </tr>
              <!-- <tr>
                <td colspan="5" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">NT$ {{ final_total }}</td>
              </tr> -->
            </tfoot>
          </table>
          <div class="d-md-flex justify-content-md-between align-items-md-center">
            <router-link to="/products" class="text-decoration-none fw-bold me-6 btn btn-outline-primary">上一頁</router-link>
            <div class="d-md-flex">
              <!-- <P>
                總計 {{ cart.total }} 元
              </P> -->
            </div>
            <router-link to="/checkout" class="text-decoration-none fw-bold me-6 btn btn-outline-primary">下一步</router-link>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
<style>
  .table-image {
    width: 200px;
    height: 200px;
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
    ...mapActions(cartStore, ['deleteCartItem']),
    deleteAllCart () {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          this.getCarts()
          // alert(res.data.message)
          Swal.fire({
            icon: 'success',
            title: '刪除全部品項成功',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
