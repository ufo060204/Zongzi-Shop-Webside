<template>
  <section class="landing-img landing-header"></section>
  <section class="bg-bg">
    <div class="container-lg">
      <Loading v-model:active="isLoading"
                :can-cancel="false"
                :color="color"
                :is-full-page="fullPage"/>
      <main class="py-8">
        <h1 class="text-center fs-2 pb-6 fw-bold">產品一覽</h1>
        <div class="row">
          <div class="btn-group mb-4 mx-auto col-lg-6">
            <button type="button" class="btn btn-outline-text-light" :class="{ active: isActive === '全部' }" @click="() => productFilter(category = '全部')">全部</button>
            <button type="button" class="btn btn-outline-text-light" :class="{ active: isActive === '鹹粽' }" @click="() => productFilter (category = '鹹粽')">鹹粽</button>
            <button type="button" class="btn btn-outline-text-light" :class="{ active: isActive === '甜粽' }" @click="() => productFilter (category = '甜粽')">甜粽</button>
            <button type="button" class="btn btn-outline-text-light" :class="{ active: isActive === '其他' }" @click="() => productFilter (category = '其他')">其他</button>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" class="row row-cols-1 row-cols-md-3">
          <div
            v-for="(product) in products"
            :key="product.id"
            class="col d-md-flex"
          >
            <router-link :to="`/product/${product.id}`" class="border-0 card mb-6 p-0">
              <div
                :style="{ 'background-image': `url(${product.imageUrl})` }"
                class="product-img d-md-flex justify-content-md-center align-items-md-center text-decoration-none"
              >
                <div class="text-decoration-none product-text stretched-link">
                  查看更多
                </div>
              </div>
              <div class="bg-white p-6 card-body">
                <div class="d-flex flex-column justify-content-between h-100">
                  <div>
                    <div class="mb-3">
                      <h4 class="text-text-dark fw-500 text-center mb-3">
                        {{ product.title }}
                        <span style="margin-top: 10px;" class="d-block fs-5">$NT {{ product.price }} 元</span>
                      </h4>
                    </div>
                    <p class="lh-lg text-text-dark">{{ product.content }}</p>
                  </div>
                  <div class="text-center">
                    <button
                      @click.prevent="() => addToCart(product.id)"
                      type="button"
                      class="btn btn-text-light cart-hover text-white w-100 d-block py-3 fs-5 fw-bold"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
            <!-- <div class="border-0 card mb-6 p-0">
              <router-link :to="`/product/${product.id}`"
                :style="{ 'background-image': `url(${product.imageUrl})` }"
                class="product-img d-md-flex justify-content-md-center align-items-md-center text-decoration-none"
              >
                <div class="text-decoration-none product-text stretched-link">
                  查看更多
                </div>
              </router-link>
              <div class="bg-white p-6 card-body">
                <div class="d-flex flex-column justify-content-between h-100">
                  <div>
                    <div class="mb-3">
                      <h4 class="text-text-dark fw-500 text-center mb-3">
                        {{ product.title }}
                        <span style="margin-top: 10px;" class="d-block fs-5">$NT {{ product.price }} 元</span>
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
            </div> -->
          </div>
        </div>
        <BackPagination :pages="page" @emitPages="getProducts"/>
      </main>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'pinia'
import BackPagination from '@/components/BackPagination.vue'
import cartStore from '@/stores/cart'
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
      fullPage: true,
      isActive: '全部'
    }
  },
  components: {
    Loading,
    BackPagination
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.page = res.data.pagination
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    productFilter (category, page = 1) {
      this.isLoading = true
      this.isActive = category
      if (category === '全部') {
        this.getProducts()
      } else {
        this.$http
          .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?page=${page}&category=${category}`)
          .then((res) => {
            this.products = res.data.products
            this.page = res.data.pagination
            this.isLoading = false
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      }
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style>
.product-img {
  width: 100%;
  height: 320px;
  position: relative;
  background-color: #f0ede5;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* padding: 60px; */
}
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
.page-item.active .page-link {
  background-color: #4A3E34;
  border-color: #4A3E34;
}
</style>
