<template>
  <section
    style="
      height: 88px;
      background-image: url(../../../src/assets/images/landing.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left top;
      background-attachment: fixed;
    "
  ></section>
  <section style="background-image: url(../../../src/assets/images/texture1.png);">
    <div class="container-md">
      <main class="py-8">
        <h1 class="text-center fs-2 pb-6 fw-bold">美味專區</h1>
        <loading v-model:active="isLoading"
                :can-cancel="false"
                :color="color"
                :is-full-page="fullPage"/>
        <div data-aos="fade-up" data-aos-duration="3000" class="row row-cols-3">
          <div
            v-for="(product) in products"
            :key="product.id"
            class="col mb-7"
          >
            <div class="border-0 px-7">
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
                <!-- <span
                  style="font-weight: 900; top: 0; left: 0"
                  class="position-absolute text-primary fs-1"
                  >0{{ index + 1 }}</span
                > -->
              </div>
              <div>
                <div class="mb-3">
                  <h4 class="m-0 text-text-dark fw-bold text-center mb-3">
                    {{ product.title }}
                  </h4>
                  <p
                    style="font-size: 32px"
                    class="m-0 text-primary fw-bold text-center"
                  >
                    $ {{ product.price }} 元
                  </p>
                </div>
                <div class="text-center">
                  <button
                    @click="() => addToCart(product.id)"
                    type="button"
                    class="cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"
                  >
                    加入購物車
                  </button>
                  <!-- <a  class="d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark" href="#">加入購物車</a> -->
                </div>
              </div>
            </div>
          </div>
          <!-- <div v-for="product in products" :key="product.id" class="col">
            <div class="card mb-7 border-0 mx-7">
              <RouterLink :to="`/product/${product.id}`">
                <img style="height: 300px;" :src="product.imageUrl" class="card-img-top" alt="imageUrl">
              </RouterLink>
              <div style="background-color: #F0EDE5;" class="card-body">
                <h5 class="card-title text-text-dark fw-bold">{{ product.title }}
                </h5>
                <p style="font-size: 32px;" class="card-text text-primary fw-bold">$ {{ product.price }} 元</p>
                <button type="button" class="cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark" @click="() => addToCart(product.id)">加入購物車</button>
              </div>
            </div>
          </div> -->
        </div>
      </main>
    </div>
  </section>
</template>
<style>
.cart-hover:hover {
  background-color: #ffe8d9;
}
.product-img {
  height: 320px;
  position: relative;
  background-color: #f0ede5;
  /* background-image: url(../../assets/images/zongzi1.png); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 60px;
  margin-bottom: 32px;
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
