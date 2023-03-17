<template>
    <section style="height: 88px; background-image: url(../../../src/assets/images/landing.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left top;
    background-attachment: fixed;">
    </section>
    <section style="background-image: url(../../../src/assets/images/texture1.png);">
      <div class="container-md">
        <loading v-model:active="isLoading"
                :can-cancel="false"
                :color="color"/>
        <main class="py-8">
          <div class="card border-0 mb-3">
            <div class="row g-0">
              <div class="col-md-6">
                <img style="height: 100%;" :src="product.imageUrl" class="img-fluid rounded-start" alt="imageUrl">
              </div>
              <div class="col-md-6">
                <div style="padding-right: 96px;padding-left: 96px; height: 100%; border: 1px solid #BFB5AC;" class="card-body bg-bg rounded d-md-flex flex-column justify-content-between">
                  <div>
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                        <li class="breadcrumb-item"><router-link to="/products">美味專區</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">產品</li>
                      </ol>
                    </nav>
                  </div>
                  <div>
                    <h1 style="font-size: 40px;" class="card-title fw-bold">{{ product.title }}</h1>
                    <h5 class="fw-bold">分類：{{ product.category }}</h5>
                    <h5 class="fw-bold">介紹：</h5>
                    <p class="card-text fs-5">{{ product.description }}</p>
                    <div class="d-flex align-items-center justify-content-end">
                      <h5 class="text-decoration-line-through">原價$ {{ product.origin_price }}</h5>
                      <h4 style="font-size: 32px;">$ <span class="text-primary fw-bold">{{ product.price }}</span> 元 / {{ product.unit }}</h4>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <button class="back d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark" type="button">
                      <router-link class="text-decoration-none text-text-dark" to="/products" title="回到產品頁面">返回</router-link>
                    </button>
                    <button type="button" class="add-cart-text d-inline-block text-white py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark" @click="() => addToCart(product.id)">加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card bg-transparent border-0">
            <div class="row row-cols-2">
              <div class="col">
                <img :src="product.imageUrl" class="card-top-img product-img img-fluid rounded-start" alt="imageUrl">
              </div>
              <div class="col">
                <div class="card-body">
                  <h1 class="card-title text-text-dark fw-bold fs-2">{{ product.title }}</h1>
                  <p class="card-text fs-5">{{ product.description }}</p>
                  <p class="card-text text-primary fw-bold fs-4">$ {{ product.price }} 元 / {{ product.unit }}</p>
                  <button class="btn btn-outline-primary" type="button">
                    <router-link class="text-decoration-none" to="/products" title="回到產品頁面">返回</router-link>
                  </button>
                  <button type="button" class="d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark" @click="() => addToCart(product.id)">加入購物車</button>
                </div>
              </div>
            </div>
          </div> -->
        </main>
      </div>
    </section>
</template>

<style>
  .product-img {
    object-fit: cover;
  }
  .back:hover {
    background: #fff;
  }
  .back:hover {
    background: #FFE8D9;
  }
  .add-cart-text {
    background-color: #FF700C;
  }
  .add-cart-text:hover {
    background-color: #BD5309;
  }
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
