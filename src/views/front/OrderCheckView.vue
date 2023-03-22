<template>
  <section class="landing-img landing-header"></section>
  <section class="bg-bg">
    <div class="container-lg">
      <main v-if="this.order.user" class="py-8 text-center">
        <ul class="list-unstyled d-md-flex justify-content-center">
          <li class="border border-boderlight py-3 px-7">確認商品</li>
          <li class="border border-boderlight py-3 px-7">填寫資料</li>
          <li class="bg-white border border-boderlight py-3 px-7">確認付款</li>
          <li class="border border-boderlight py-3 px-7">完成付款</li>
        </ul>
        <div class="row justify-content-lg-center">
          <div class="col-lg-6">
            <table class="table align-middle text-text-dark table-light border-bottom border-borderlight fs-4">
              <thead>
                <tr>
                  <th class="p-3">姓名</th>
                  <td class="p-3">{{ this.order.user.name }}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="p-3">Email</th>
                  <td class="p-3">{{ this.order.user.email }}</td>
                </tr>
                <tr>
                  <th class="p-3">電話</th>
                  <td class="p-3">{{ this.order.user.tel}}</td>
                </tr>
                <tr>
                  <th class="p-3">地址</th>
                  <td class="p-3">{{ this.order.user.address }}</td>
                </tr>
                <tr>
                  <th class="p-3">訂購產品</th>
                  <td class="p-3">
                    <ul class="list-unstyled">
                      <li v-for="product in this.order.products" :key="product.id">
                        {{ product.product.title }} X {{ product.qty }}
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th class="p-3">付款金額</th>
                  <td class="p-3">$NT {{ this.order.total}}</td>
                </tr>
                <tr>
                  <th class="p-3">付款狀態</th>
                  <td class="p-3" v-if="!this.order.is_paid">未付款</td>
                  <td class="p-3" v-else>已付款</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button @click="() => pay()" type="button" class="btn btn-outline-primary">確認付款</button>
      </main>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      orderId: '',
      order: []
    }
  },
  methods: {
    getOrder () {
      this.orderId = this.$route.params.id
      const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order/${this.orderId}`
      this.$http
        .get(api)
        .then((res) => {
          // console.log(res)
          this.order = res.data.order
          // console.log('訂單列表', this.order)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    pay () {
      Swal.fire({
        title: '結帳確認',
        text: '確認資料無誤並結帳嗎?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確認'
      }).then((result) => {
        if (result.isConfirmed) {
          const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/pay/${this.orderId}`
          this.$http
            .post(api)
            .then((res) => {
              // console.log(res)
              this.cart = []
              Swal.fire(
                '付款完成',
                '您已完成結帳',
                'success'
              )
              this.$router.push('/orderFinished')
            })
        }
      })
    }
  },
  mounted () {
    // this.orderId = this.$route.params.id
    // console.log(this.$route.params)
    this.getOrder()
  }
}
</script>
