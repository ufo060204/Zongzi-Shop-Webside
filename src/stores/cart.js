import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const cartStore = defineStore('cart', {
  // state 概念同「data」，在此可以使用箭頭函式
  state: () => {
    return {
      // status: false,
      cart: [],
      total: 0, // 先試試看 pinia 有無正確運作
      final_total: 0,
      isLoading: false,
      color: '#FF700C',
      fullPage: true
    }
  },
  // actions 概念同「methods」
  actions: {
    // 可使用 this 使用 state 的資料內容
    getCarts () {
      axios
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data.carts
          this.total = res.data.data.total
          this.final_total = res.data.data.final_total
          // this.status = true
          // console.log('total', this.total)
          // console.log('這是購物車頁面', this.cart)
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
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
  // getters 概念同「computed」
  getters: {
  }
})

export default cartStore
