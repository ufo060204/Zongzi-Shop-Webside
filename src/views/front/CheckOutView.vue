<template>
  <section class="landing-img landing-header"></section>
  <section class="bg-bg">
    <div class="container-lg">
      <main class="py-8">
        <ul class="list-unstyled d-md-flex justify-content-center">
          <li class="border border-boderlight py-3 px-7">確認商品</li>
          <li class="bg-white border border-boderlight py-3 px-7">填寫資料</li>
          <li class="border border-boderlight py-3 px-7">確認付款</li>
          <li class="border border-boderlight py-3 px-7">完成付款</li>
        </ul>
        <div class="row">
          <div class="col-lg-6">
            <div class="border border-text-dark p-6">
              <table class="table align-middle text-center table-borderless">
                <thead>
                  <tr>
                    <th>圖片</th>
                    <th>品名</th>
                    <th style="width: 150px">數量</th>
                    <th>單價</th>
                  </tr>
                </thead>
                <tbody class="border-bottom border-top border-text-light border-2">
                  <template v-if="cart">
                    <tr v-for="item in cart" :key="item.id">
                      <td>
                        <img
                        style="width: 150px"
                        :src="item.product.imageUrl"
                          class="img-fluid"
                          alt="imageUrl"
                          />
                          <!-- <RouterLink :to="`/product/${item.id}`">
                        </RouterLink> -->
                      </td>
                      <td>
                        {{ item.product.title }}
                        <!-- <div class="text-success">已套用優惠券</div> -->
                      </td>
                      <td>
                        {{ item.qty }}
                      </td>
                      <td>
                        <!-- <small class="text-success">折扣價：</small> -->
                        NT$ {{ item.total }}
                      </td>
                    </tr>
                  </template>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" class="text-end">總計</td>
                    <td colspan="2" class="text-end fw-bold fs-5">NT$ {{ total }}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              <v-form
                ref="form"
                class="border border-text-dark p-6 fw-bold"
                v-slot="{ errors }"
                @submit="sendOrder"
              >
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <v-field
                    id="email"
                    name="email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors['email'] }"
                    placeholder="請輸入 Email"
                    rules="email|required"
                    v-model="form.user.email"
                  ></v-field>
                  <error-message
                    name="email"
                    class="invalid-feedback"
                  ></error-message>
                </div>

                <div class="mb-3">
                  <label for="name" class="form-label">收件人姓名</label>
                  <v-field
                    id="name"
                    name="姓名"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['姓名'] }"
                    placeholder="請輸入姓名"
                    rules="required"
                    v-model="form.user.name"
                  ></v-field>
                  <error-message
                    name="姓名"
                    class="invalid-feedback"
                  ></error-message>
                </div>

                <div class="mb-3">
                  <label for="tel" class="form-label">收件人電話</label>
                  <v-field
                    id="tel"
                    name="電話"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['電話'] }"
                    placeholder="請輸入電話"
                    rules="required|min:8|max:10"
                    v-model="form.user.tel"
                  ></v-field>
                  <error-message
                    name="電話"
                    class="invalid-feedback"
                  ></error-message>
                </div>

                <div class="mb-3">
                  <label for="address" class="form-label">收件人地址</label>
                  <v-field
                    id="address"
                    name="地址"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['地址'] }"
                    placeholder="請輸入地址"
                    rules="required"
                    v-model="form.user.address"
                  ></v-field>
                  <error-message
                    name="地址"
                    class="invalid-feedback"
                  ></error-message>
                </div>

                <div class="mb-3">
                  <label for="message" class="form-label">留言</label>
                  <textarea
                    id="message"
                    class="form-control"
                    cols="30"
                    rows="10"
                    v-model="form.message"
                  ></textarea>
                </div>
                <div class="d-lg-flex justify-content-lg-between align-items-lg-center">
                <router-link
                  to="/cart"
                  class="text-decoration-none d-inline-block btn btn-outline-text-light"
                  >上一頁</router-link
                >
                <button class="btn btn-outline-primary d-block" type="submit">下一步</button>
                </div>
              </v-form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import { mapState } from 'pinia'
import cartStore from '../../stores/cart'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      productId: '',
      form: {
        user: {
          name: '張育成',
          email: 'yuga@gmail.com',
          tel: '0973101123',
          address: '台東縣東河鄉本部落30號'
        },
        message: '你好，謝謝'
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['cart', 'total', 'final_total'])
  },
  methods: {
    updateCartItem (item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      this.$http
        .put(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.getCarts()
          this.loadingItem = ''
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    deleteCartItem (item) {
      this.loadingItem = item.id
      this.$http
        .delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((res) => {
          this.loadingItem = ''
          this.getCarts()
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    deleteAllCart () {
      this.$http
        .delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          this.getCarts()
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    isRequired (value) {
      return value ? true : 'This field is required'
    },
    sendOrder () {
      const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order`
      this.$http.post(api, { data: this.form })
        .then((res) => {
          const orderId = res.data.orderId
          this.$router.push(`/orderCheck/${orderId}`)
          // console.log(orderId)
          // console.log(res.data.message)
        })
        .catch((err) => {
          console.log(err)
          this.$router.push('/products')
        })
    }
  },
  mounted () {
    // this.getCarts()
  }
}
</script>
