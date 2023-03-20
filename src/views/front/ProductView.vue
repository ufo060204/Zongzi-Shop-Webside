<template>
    <section class="landing-img landing-header"></section>
    <section class="bg-bg">
      <div class="container-lg">
        <loading v-model:active="isLoading"
                :can-cancel="false"
                :color="color"/>
        <main class="pb-8">
          <div class="pt-8 d-flex align-items-end">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                <li class="breadcrumb-item"><router-link to="/products">美味專區</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">產品</li>
              </ol>
            </nav>
          </div>
          <div class="card border-0 mb-3">
            <div class="row g-0">
              <div class="col-lg-6">
                <img style="height: 100%;" :src="product.imageUrl" class="img-fluid rounded-start" alt="imageUrl">
              </div>
              <div class="col-lg-6">
                <div class="card-body h-100 bg-bg border-0 d-md-flex flex-column justify-content-between">
                  <div>
                    <h1 class="card-title fs-3 py-4 text-center fw-500">{{ product.title }}</h1>
                    <p class="card-text fs-5 lh-lg">{{ product.description }}</p>
                    <div class="d-flex w-30">
                      <div style="width: 40%;">
                        <h5 class="py-3 mb-0 border-boderlight border-bottom">種類：</h5>
                        <h5 class="py-3 mb-0 border-boderlight border-bottom">產地：</h5>
                        <h4 class="py-3 mb-0 border-boderlight border-bottom fw-bold">價格：</h4>
                        <h5 class="py-3 mb-0 mt-3">
                          <input readonly="readonly" style="width: 50%;" type="number" value="1">
                        </h5>
                      </div>
                      <div class="d-flex flex-column align-items-center w-100">
                        <div class="text-center w-100">
                          <h5 class="py-3 mb-0 border-boderlight border-bottom">{{ product.category }}</h5>
                          <h5 class="py-3 mb-0 border-boderlight border-bottom">台灣在地生產</h5>
                          <h4 class="py-3 mb-0 border-boderlight border-bottom fw-bold">{{ product.price }}  <span class="text-decoration-line-through fs-6">$ {{ product.origin_price }}</span> 元 / {{ product.unit }}</h4>
                          <button type="button" class="btn btn-primary w-100 add-cart-text text-white py-3 mt-3 fs-5 fw-bold text-decoration-none" @click="() => addToCart(product.id)">加入購物車</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="btn d-block py-3 fs-5 w-100 fw-bold text-decoration-none border border-text-dark" type="button">
            <router-link class="text-decoration-none text-text-dark" to="/products" title="回到產品頁面">返回產品</router-link>
          </button>
        </main>
      </div>
    </section>
</template>

<style>
  .product-img {
    object-fit: cover;
  }
  /* .back:hover {
    background: #fff;
  }
  .back:hover {
    background: #FFE8D9;
  } */
  /* .add-cart-text {
    background-color: #FF700C;
  }
  .add-cart-text:hover {
    background-color: #BD5309;
  } */
</style>

<script>
import { mapActions } from 'pinia'
import cartStore from '../../stores/cart'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {},
      isLoading: false,
      color: '#FF700C'
    }
  },
  components: {
    Loading
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/product/${id}`)
        .then(res => {
          this.product = res.data.product
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    ...mapActions(cartStore, ['addToCart'])
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
    // }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
