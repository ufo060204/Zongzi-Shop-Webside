<template>
  <section class="landing-img landing-header"></section>
  <section class="bg-bg">
    <div class="container-lg">
      <main class="py-8">
        <h1 class="text-center fs-2 pb-6 fw-bold">產品一覽</h1>
        <loading v-model:active="isLoading"
                :can-cancel="false"
                :color="color"
                :is-full-page="fullPage"/>
        <div data-aos="fade-up" data-aos-duration="3000" class="row row-cols-md-3">
          <div
            v-for="(product) in products"
            :key="product.id"
            class="col d-md-flex align-items-stretch"
          >
            <div class="border-0 card mb-6">
              <div
                :style="{ 'background-image': `url(${product.imageUrl})` }"
                class="product-img d-md-flex justify-content-md-center align-items-md-center"
              >
                <router-link
                  class="text-decoration-none product-text stretched-link"
                  :to="`/product/${product.id}`"
                >
                  查看更多
                </router-link>
              </div>
              <div class="bg-white p-6 card-body">
                <div class="d-flex flex-column justify-content-between h-100">
                  <div>
                    <div class="mb-3">
                      <h4 class="text-text-dark fw-500 text-center mb-3">
                        {{ product.title }}
                        <span style="margin-top: 10px;" class="d-block fs-5">$ {{ product.price }} 元</span>
                      </h4>
                    </div>
                    <p class="lh-lg">{{ product.content }}</p>
                  </div>
                  <div class="text-center">
                    <button
                      @click="() => addToCart(product.id)"
                      type="button"
                      class="btn btn-text-light cart-hover text-white w-100 d-block py-3 fs-5 fw-bold"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
<style>
/* .cart-hover:hover {
  background-color: #ffe8d9;
} */
.product-img {
  height: 320px;
  position: relative;
  background-color: #f0ede5;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 60px;
  /* border-radius: 50%; */
}
/* .product-img:hover {
  border-radius: 50%;
} */
.product-img::after {
  content: "";
  background-color: #00000080;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* border-radius: 50%; */
}
.product-img:hover:after {
  opacity: 1;
}
.product-text {
  padding: 16px 48px;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  border: 1px solid #fff;
  opacity: 0;
  z-index: 10;
}
.product-text:hover {
  opacity: 1;
  color: #fff;
}
</style>

<script>
import { mapActions } from 'pinia'
import { RouterLink } from 'vue-router'
import cartStore from '../../stores/cart'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      page: {},
      isLoading: false,
      color: '#FF700C',
      fullPage: true
    }
  },
  components: {
    RouterLink,
    Loading
  },
  methods: {
    getProducts () {
      this.isLoading = true
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
          console.log('產品列表', this.products)
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    // addToCart (id) {
    //   const data = {
    //     product_id: id,
    //     qty: 1
    //   }
    //   this.$http
    //     .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`, { data })
    //     .then((res) => {
    //       alert(res.data.message)
    //     })
    //     .catch((err) => {
    //       alert(err.message)
    //     })
    // },
    ...mapActions(cartStore, ['addToCart'])
  },
  mounted () {
    this.getProducts()
  }
}
</script>
