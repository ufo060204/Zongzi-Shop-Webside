<template>
  <section style="height: 88px; background-image: url(../../../src/assets/images/landing.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left top;
    background-attachment: fixed;">
  </section>
  <section style="background-image: url(../../../src/assets/images/texture1.png);">
    <div class="container-md">
      <main v-if="this.order.user" class="py-8 text-center">
        <ul class="list-unstyled d-md-flex justify-content-center">
          <li style="background-color: #ffe8d9" class="py-3 px-7 me-6">確認商品</li>
          <li style="background-color: #ffe8d9" class="py-3 px-7 me-6 ">填寫資料</li>
          <li class="bg-primary py-3 px-7 me-6">確認付款</li>
          <li style="background-color: #ffe8d9" class="py-3 px-7">完成付款</li>
        </ul>
        <div class="d-md-flex justify-content-md-center">
          <table class="table align-middle border-bottom border-text-dark fs-4" style="max-width: 50%;">
            <thead>
              <tr>
                <th scope="col">姓名</th>
                <td scope="col">{{ this.order.user.name }}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Email</th>
                <td>{{ this.order.user.email }}</td>
              </tr>
              <tr>
                <th scope="row">電話</th>
                <td>{{ this.order.user.tel}}</td>
              </tr>
              <tr>
                <th scope="row">地址</th>
                <td colspan="2">{{ this.order.user.address }}</td>
              </tr>
              <tr>
                <th scope="row">訂購產品</th>
                <td>
                  <ul class="list-unstyled">
                    <li v-for="product in this.order.products" :key="product.id">
                      {{ product.product.title }} X {{ product.qty }}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row">付款金額</th>
                <td>{{ this.order.total}}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td v-if="!this.order.is_paid">未付款</td>
                <td v-else>已付款</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button @click="() => pay()" type="button" class="btn btn-outline-primary">確認付款</button>
      </main>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'
// import { mapActions } from 'pinia'
// import cartStore from '../../stores/cart'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      orderId: '',
      order: []
    }
  },
  // computed: {
  //   ...mapState(cartStore, 'cart')
  // },
  methods: {
    getOrder () {
      this.orderId = this.$route.params.id
      const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order/${this.orderId}`
      this.$http
        .get(api)
        .then((res) => {
          console.log(res)
          this.order = res.data.order
          console.log('訂單列表', this.order)
        })
        .catch((err) => {
          console.log(err)
        })
      // if (this.orderId) {
      // }
    },
    // ...mapActions(cartStore, 'pay'),
    // pay () {
    //   const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/pay/${this.orderId}`
    //   this.$http
    //     .post(api)
    //     .then((res) => {
    //       console.log(res)
    //       alert(res.data.message)
    //       this.$router.push('/orderFinished')
    //     })
    // }
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
              console.log(res)
              this.cart = []
              // alert(res.data.message)
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
    console.log(this.$route.params)
    this.getOrder()
  }
}
</script>
