<template>
    <section class="landing-img landing-header" />
    <section class="bg-bg">
      <div class="container-lg">
        <Loading v-model:active="isLoading"
                :can-cancel="false"
                :color="color"/>
        <main class="pb-7">
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
                <img :src="product.imageUrl" class="one-product-img" alt="產品圖片">
              </div>
              <div class="col-lg-6">
                <div class="card-body h-100 bg-bg border-0 d-md-flex flex-column justify-content-between">
                  <div>
                    <h1 class="card-title fs-3 py-4 text-center fw-500">{{ product.title }}</h1>
                    <p class="card-text fs-5 lh-lg">{{ product.description }}</p>
                    <div class="row g-0">
                      <div class="col-5">
                        <h5 class="py-3 border-boderlight border-bottom">種類：</h5>
                        <h5 class="py-3 border-boderlight border-bottom">產地：</h5>
                        <h4 class="py-3 mb-3 border-boderlight border-bottom fw-bold">價格：</h4>
                        <h5 class="py-3">
                          <div class="input-group mb-1">
                            <div class="input-group-prepend">
                              <button type="button" class="btn btn-outline-primary" :disabled="qty <= 1" @click="() => qty -= 1" id="button-addon1">
                                <i class="bi bi-dash"></i>
                              </button>
                            </div>
                            <input type="form" ref="qty" class="form-control text-center" v-model.number="qty" aria-label="Example text with two button addons">
                            <div class="input-group-append">
                              <button type="button" class="btn btn-outline-primary" @click="() => qty += 1" id="button-addon2">
                                <i class="bi bi-plus"></i>
                              </button>
                            </div>
                          </div>
                          <span v-if="checkBuyNum.boolean" class="fs-6 text-danger d-block text-center">{{ checkBuyNum.message }}</span>
                          <span v-else class="fs-6 text-danger d-block invisible text-center">數量不能小於0</span>
                        </h5>
                      </div>
                      <div class="col-7 text-center">
                        <h5 class="py-3 border-boderlight border-bottom">{{ product.category }}</h5>
                        <h5 class="py-3 border-boderlight border-bottom">台灣在地生產</h5>
                        <h4 class="py-3 mb-3 border-boderlight border-bottom fw-bold">NT$ {{ product.price }}  <span class="text-decoration-line-through fs-6">{{ product.origin_price }}</span> 元 / {{ product.unit }}</h4>
                        <button type="button" style="width: 90%;" class="btn btn-primary add-cart-text text-white py-3 fs-5 fw-bold text-decoration-none" @click="() => addToCart(product.id, qty)">加入購物車</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/products" class="btn d-flex aligns-center py-3 fs-5 fw-bold text-text-dark border border-text-light" title="前往產品頁面">
            <span class="mx-auto">返回產品</span>
            <span class="material-symbols-outlined">
              arrow_back
            </span>
          </router-link>
        </main>
      </div>
    </section>
    <section class="bg-bg">
      <div class="container-lg">
        <div class="main pb-8">
          <div class="card card-body fs-5">
            <h4 class="mb-5 text-center text-text-dark">
            老闆不藏私，美味的小撇步！
            </h4>
            <p>1.使用蒸籠或傳統電鍋，請勿使用微波爐。</p>
            <p>2.如果是用蒸籠，內鍋約 2500cc 到 3000cc 的水，大火蒸 40 分鐘(中間不宜加水)，熄火後再悶 5分鐘。</p>
            <p>3.如果使用傳統電鍋，內放置蒸架及盤子(物使用鍋子)，電鍋底部放 2杯水(量米杯)，開關跳起時在悶約 5 到 10 分鐘(勿悶過久，避免口感不佳唷！)</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-lg">
        <main class="py-8 text-center">
          <h4 class="text-text-dark mb-7">還想來點...你怎能錯過！</h4>
          <hr>
          <SwiperView :categoryProducts='categoryProducts'/>
        </main>
      </div>
    </section>
</template>

<script>
import { mapActions } from 'pinia'
import cartStore from '@/stores/cart'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import SwiperView from '@/components/SwiperView.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {},
      productId: '',
      isLoading: false,
      color: '#FF700C',
      qty: 1,
      categoryProducts: [],
      checkBuyNum: {
        boolean: false,
        message: ''
      }
    }
  },
  components: {
    Loading, SwiperView
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/product/${id}`)
        .then(res => {
          this.productId = id
          this.product = res.data.product
          this.getCategoryProducts()
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    getCategoryProducts () {
      this.isLoading = true
      const { category } = this.product
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?category=${category}`)
        .then(res => {
          this.categoryProducts = res.data.products
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  watch: {
    qty () {
      if (this.qty < 1) {
        this.checkBuyNum.boolean = true
        this.checkBuyNum.message = '數量不能小於0'
        this.qty = 1
      } else if (this.qty > 1) {
        this.checkBuyNum.boolean = false
      }
    },
    // 產品 id 改變後重新渲染畫面
    '$route.params.id': {
      handler (changedId) {
        this.id = changedId
        if (this.id) {
          this.getProduct()
        }
      }
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style>
  @media (max-width: 768px) {
      .one-product-img {
        height: auto !important;
      }
    }
  .one-product-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .product-category-img {
  height: 250px;
  position: relative;
  background-color: #f0ede5;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.product-category-img::after {
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
.product-category-img:hover:after {
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
