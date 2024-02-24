import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'
import Swal from 'sweetalert2'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const cartStore = defineStore('cart', {
  state: () => {
    return {
      // status: false,
      cart: [],
      total: 0, // 先試試看 pinia 有無正確運作
      final_total: 0,
      isLoading: false,
      couponCode: '',
      color: '#FF700C',
      fullPage: true,
      qty: 1
    }
  },
  actions: {
    getCarts () {
      this.isLoading = true
      axios
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data.carts
          this.total = res.data.data.total
          this.final_total = res.data.data.final_total
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      axios
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          // alert(res.data.message)
          this.getCarts()
          Swal.fire({
            icon: 'success',
            title: '加入購物車成功',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    deleteCartItem (item) {
      this.loadingItem = item.id
      axios
        .delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((res) => {
          this.loadingItem = ''
          this.getCarts()
          // alert(res.data.message)
          Swal.fire({
            icon: 'success',
            title: '刪除產品成功',
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
      axios
        .post(api, { data })
        .then((res) => {
          if (res.data.success === true) {
            this.getCarts()
            Swal.fire({
              showConfirmButton: false,
              icon: 'success',
              title: '套用成功',
              text: '已套用優惠券 zongzi40',
              timer: 1000
            })
          } else if (res.data.success === false) {
            Swal.fire({
              icon: 'error',
              title: '套用失敗',
              text: '找不到優惠券',
              footer: '<a href="#" class="goGetCoupon">前往領取優惠碼</a>',
              didOpen: () => {
                const goGetCoupon = Swal.getPopup().querySelector('.goGetCoupon')
                goGetCoupon.addEventListener('click', (e) => {
                  e.preventDefault()
                  router.push('/home/-NR8JzTIYKZ08sSYBdjQ')
                  Swal.close()
                })
              }
            })
          }
        })
        .catch((err) => {
          Swal.fire(err.response.data.message)
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
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/pay/${this.orderId}`
          axios
            .post(api)
            .then((res) => {
              // console.log(res)
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
  getters: {
  }
})

export default cartStore
