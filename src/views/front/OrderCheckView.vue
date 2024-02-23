<template>
  <section class="landing-img landing-header" />
  <VueLoading :active="isLoading" :color="color" :z-index="9999"/>
  <section class="bg-bg">
    <div class="container-lg">
      <main v-if="this.order.user" class="py-7 py-lg-8 text-center">
        <ul class="list-unstyled d-md-flex justify-content-center mb-3">
          <li class="border border-boderlight py-3 px-7">確認商品</li>
          <li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li>
          <li class="border border-boderlight py-3 px-7">填寫資料</li>
          <li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li>
          <li class="bg-white border border-boderlight py-3 px-7">確認付款</li>
          <li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li>
          <li class="border border-boderlight py-3 px-7">完成付款</li>
        </ul>
        <div class="row justify-content-lg-center">
          <div class="col-lg-6">
            <table style="box-shadow: 0 0 16px rgba(0, 0, 0, 0.08);" class=" table text-text-dark bg-white fs-5">
              <tr class="bg-boderlight">
                <th class="py-3 fs-4">訂單資訊</th>
              </tr>
              <tr style="margin: 0 -6px;" class="row border-bottom py-3">
                <th class="col-md-5">姓名</th>
                <td class="col-md-7">{{ this.order.user.name }}</td>
              </tr>
              <tr class="row border-bottom py-3 m-0 align-items-center">
                <th class="col-md-5">Email</th>
                <td style="word-wrap:break-word;" class="col-md-7">{{ this.order.user.email }}</td>
              </tr>
              <tr class="row border-bottom py-3 m-0 align-items-center">
                <th class="col-md-5">電話</th>
                <td class="col-md-7">{{ this.order.user.tel}}</td>
              </tr>
              <tr class="row border-bottom py-3 m-0 align-items-center">
                <th class="col-md-5">地址</th>
                <td style="word-wrap:break-word;" class="col-md-7">{{ this.order.user.address }}</td>
              </tr>
              <tr class="row border-bottom py-3 m-0 align-items-center">
                <th class="col-md-5">訂購產品</th>
                <td class="col-md-7">
                  <ul class="list-unstyled bg-white">
                    <li v-for="product in this.order.products" :key="product.id">
                      {{ product.product.title }} X {{ product.qty }}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr class="row border-bottom py-3 m-0">
                <th class="col-md-5">付款金額</th>
                <td class="col-md-7">$NT {{ this.order.total}}</td>
              </tr>
              <tr class="row border-bottom py-3 m-0">
                <th class="col-md-5">付款狀態</th>
                <td class="col-md-7" v-if="!this.order.is_paid">未付款</td>
                <td class="col-md-7" v-else>已付款</td>
              </tr>
            </table>
          </div>
        </div>
        <button @click="() => pay()" type="button" class="btn btn-outline-primary btn-lg rounded-0">確認付款</button>
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
      order: [],
      isLoading: false,
      color: '#FF700C'
    }
  },
  methods: {
    getOrder () {
      this.isLoading = true
      this.orderId = this.$route.params.id
      const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order/${this.orderId}`
      this.$http
        .get(api)
        .then((res) => {
          this.order = res.data.order
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire(err.message)
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
        confirmButtonText: '確認',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/pay/${this.orderId}`
          this.$http
            .post(api)
            .then((res) => {
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
    this.getOrder()
  }
}
</script>
