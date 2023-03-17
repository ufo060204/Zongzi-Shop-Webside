<template>
  <loading v-model:active="isLoading"
                :can-cancel="false"
                :color="color"/>
  <main>
    <section
      style="
        /* background-image: url(../../../src/assets/images/landing.png); */
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left top;
        background-attachment: fixed;
        /* margin-top: -88px; */
      "
      class="d-flex align-items-center landing-bg"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="d-flex align-items-center position-relative">
              <h1
                style="border-right: 1px solid #FFFFFF66; z-index: 1"
                class="mb-0 me-6 py-3 pe-3 text-white fw-bold drop-shadow"
              >
                吉<br />祥<br />粽<br />香<br />藏<br />館
              </h1>
              <div style="z-index: 1" class="d-flex me-7">
                <h4 style="color: #e6e6e6" class="mb-0 me-3 drop-shadow">
                  傳<br />統<br />粽<br />香<br />，<br />新<br />潮<br />食<br />趣
                </h4>
                <h4 style="color: #e6e6e6" class="m-0 drop-shadow">
                  品<br />嘗<br />傳<br />承<br />40<br />年<br />故<br />鄉<br />的<br />好<br />味<br />道
                </h4>
              </div>
              <h5 style="z-index: 1" class="m-0">
                <router-link
                  to="/products"
                  class="banner-link d-block text-decoration-none p-3 text-white"
                  href="#"
                  >探<br />索<br />美<br />味</router-link
                >
              </h5>
              <div
                class="position-absolute translate-middle-x"
                style="
                  width: 492px;
                  height: 421px;
                  background-image: url(../../../src/assets/images/bg-polygon-desktop.svg);
                  background-repeat: no-repeat;
                  background-position: top;
                  top: 16px;
                  left: 50%;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="py-8"
      style="
        background-image: url(../../../src/assets/images/texture1.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left top;
      "
    >
      <div class="container-md">
        <div class="row mb-8 align-items-md-center">
          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="col-md-6">
            <img
              src="../../assets/images/img1.png"
              alt="img1"
              class="img-fluid"
            />
          </div>
          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="col-md-6">
            <div
              class="d-md-flex justify-content-md-center py-7"
              style="height: 396px"
            >
              <div class="d-md-flex">
                <h3
                  style="height: 192px"
                  class="wm-lr m-0 pe-6 fw-bold text-text-dark text-justify"
                >
                  用料精選
                </h3>
                <div class="d-md-flex">
                  <h5 class="wm-lr m-0 px-3 text-text-light text-justify">
                    我們的粽子使用的食材
                  </h5>
                  <h5 class="wm-lr m-0 px-3 text-text-light text-justify">
                    都是經過精心選擇堅持
                  </h5>
                  <h5 class="wm-lr m-0 px-3 text-text-light text-justify">
                    傳統古早味，獨特香料
                  </h5>
                  <h5 class="wm-lr m-0 px-3 text-text-light text-justify">
                    配方、品質優良傳統手
                  </h5>
                  <h5 class="wm-lr m-0 px-3 text-text-light text-justify">
                    工製作方式製作，保證
                  </h5>
                  <h5
                    style="height: 150px"
                    class="wm-lr mx-0 mb-0 px-3 text-text-light text-justify"
                  >
                    口感道地。
                  </h5>
                </div>
                <div style="text-align: -webkit-center" class="ps-6">
                  <img
                    class="d-block mb-4"
                    src="../../assets/images/polygon-big.svg"
                    alt=""
                  />
                  <img
                    class="d-block mb-4"
                    src="../../assets/images/Rectangle.png"
                    alt=""
                  />
                  <h5 class="m-0">
                    <router-link
                      to="/products"
                      style="height: 152px"
                      href="#"
                      class="product-link wm-lr border border-text-dark fw-bold text-text-dark text-decoration-none p-3 text-justify"
                      >更多產品</router-link
                    >
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-md-center">
          <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" class="col-md-6">
            <div
              class="d-md-flex justify-content-md-center py-7"
              style="height: 396px"
            >
              <div class="d-md-flex">
                <h3
                  style="height: 288px"
                  class="wm-lr m-0 pe-6 fw-bold text-text-dark text-justify"
                >
                  多款口味選擇
                </h3>
                <div style="color: #594a3e" class="d-md-flex">
                  <h5 class="wm-lr m-0 px-3 fw-normal text-justify">
                    提供多種口味的粽子供
                  </h5>
                  <h5 class="wm-lr m-0 px-3 fw-normal text-justify">
                    消費者做選擇，從傳統
                  </h5>
                  <h5 class="wm-lr m-0 px-3 fw-normal text-justify">
                    的肉粽到創新的水果粽
                  </h5>
                  <h5 class="wm-lr m-0 px-3 fw-normal text-justify">
                    都有，無添加防腐劑，
                  </h5>
                  <h5 class="wm-lr m-0 px-3 fw-normal text-justify">
                    顧客能夠安心享用到新
                  </h5>
                  <h5
                    style="height: 210px"
                    class="wm-lr mx-0 mb-0 px-3 text-text-light text-justify"
                  >
                    鮮美味的粽子。
                  </h5>
                </div>
                <div style="text-align: -webkit-center" class="ps-6">
                  <img
                    class="d-block mb-4"
                    src="../../assets/images/polygon-big.svg"
                    alt=""
                  />
                  <img
                    class="d-block mb-4"
                    src="../../assets/images/Rectangle.png"
                    alt=""
                  />
                  <h5 class="m-0">
                    <router-link
                      to="/products"
                      style="height: 152px"
                      href="#"
                      class="product-link wm-lr border border-text-dark fw-bold text-text-dark text-decoration-none p-3 text-justify"
                      >更多產品</router-link
                    >
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" class="col-6">
            <img
              src="../../assets/images/img2.png"
              alt="img2"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="py-8">
      <div class="container-md">
        <h2 class="mb-10 fw-bold text-center">熱銷產品</h2>
        <div class="row">
          <div data-aos="fade-up" data-aos-duration="3000" class="col-md-4"
          >
            <div class="border-0 px-7">
              <div style="background-image: url(../../../src/assets/images/zongzi1.png);background-size: cover;background-size: 60%; background-position: center;" class="product-img d-md-flex justify-content-md-center align-items-md-center">
                <router-link
                  class="text-decoration-none product-text stretched-link"
                  :to="`/product/-NM27yCriEAoX1-aPW4j`"
                >
                  查看更多
                </router-link>
                <span
                  style="font-weight: 900; top: 0; left: 0"
                  class="position-absolute text-primary fs-1"
                  >01</span
                >
              </div>
              <div>
                <div class="mb-3">
                  <h4 class="m-0 text-text-dark fw-bold text-center mb-3">
                    招牌北部粽
                  </h4>
                  <p
                    style="font-size: 32px"
                    class="m-0 text-primary fw-bold text-center"
                  >
                    $ 75 元
                  </p>
                </div>
                <div class="text-center">
                  <button
                    @click="() => addToCart(`-NM27yCriEAoX1-aPW4j`)"
                    type="button"
                    class="cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" class="col-md-4"
          >
            <div class="border-0 px-7">
              <div style="background-image: url(../../../src/assets/images/zongzi2.png);background-size: cover;background-size: 60%; background-position: center;" class="product-img d-md-flex justify-content-md-center align-items-md-center">
                <router-link
                  class="text-decoration-none product-text stretched-link"
                  :to="`/product/-NM2d45PodDNatFQYTQ3`"
                >
                  查看更多
                </router-link>
                <span
                  style="font-weight: 900; top: 0; left: 0"
                  class="position-absolute text-primary fs-1"
                  >02</span
                >
              </div>
              <div>
                <div class="mb-3">
                  <h4 class="m-0 text-text-dark fw-bold text-center mb-3">
                    傳統南部粽
                  </h4>
                  <p
                    style="font-size: 32px"
                    class="m-0 text-primary fw-bold text-center"
                  >
                    $ 75 元
                  </p>
                </div>
                <div class="text-center">
                  <button
                    @click="() => addToCart(`-NM2d45PodDNatFQYTQ3`)"
                    type="button"
                    class="cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" class="col-md-4"
          >
            <div class="border-0 px-7">
              <div style="background-image: url(../../../src/assets/images/sauce.png);background-size: cover;background-size: 70%; background-position: center;" class="product-img d-md-flex justify-content-md-center align-items-md-center">
                <router-link
                  class="text-decoration-none product-text stretched-link"
                  :to="`/product/-NM2huSRBtLQp39YYdPB`"
                >
                  查看更多
                </router-link>
                <span
                  style="font-weight: 900; top: 0; left: 0"
                  class="position-absolute text-primary fs-1"
                  >03</span
                >
              </div>
              <div>
                <div class="mb-3">
                  <h4 class="m-0 text-text-dark fw-bold text-center mb-3">
                    秘傳醬汁
                  </h4>
                  <p
                    style="font-size: 32px"
                    class="m-0 text-primary fw-bold text-center"
                  >
                    $ 90 元
                  </p>
                </div>
                <div class="text-center">
                  <button
                    @click="() => addToCart(`-NM2huSRBtLQp39YYdPB`)"
                    type="button"
                    class="cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-if="popular" class="row">
          <div
            v-for="(product, index) in popular"
            :key="product.id"
            class="col-md-4"
          >
            <div class="border-0 px-7">
              <div :style="{ 'background-image': `url(${product.imageUrl})` }" class="product-img d-md-flex justify-content-md-center align-items-md-center">
                <router-link
                  class="text-decoration-none product-text stretched-link"
                  :to="`/product/${product.id}`"
                >
                  查看更多
                </router-link>
                <span
                  style="font-weight: 900; top: 0; left: 0"
                  class="position-absolute text-primary fs-1"
                  >0{{ index + 1 }}</span
                >
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
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </section>
    <section
      class="py-8"
      style="
        background-image: url(../../../src/assets/images/texture2.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left top;
      "
    >
      <div class="container-md">
        <h2 class="mb-10 text-center fw-bold">最新消息</h2>
        <div class="row">
          <div data-aos="zoom-in" data-aos-duration="2000" class="col-md-6">
            <div style="height: 200px" class="position-relative d-md-flex">
              <img
                class="img-fluid"
                src="../../assets/images/img3.png"
                alt="img3"
              />
              <div class="p-4">
                <h4 class="mb-3 text-text-dark fw-bold">
                  春節優惠活動，全店商品八折
                </h4>
                <p style="color: #594a3e" class="mb-3 fs-5">
                  01/29 前結帳時輸入，優惠碼 Happy2023 可享 8 折優惠！
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <img
                    src="../../assets/images/polygon-small.svg"
                    alt="polygon-small"
                  />
                  <img
                    src="../../assets/images/Rectangle-m.png"
                    alt="Rectangle-m"
                  />
                  <a
                    class="text-decoration-none fw-bold fs-5 stretched-link"
                    href="#"
                    >查看更多</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="2000" class="col-md-6">
            <div style="height: 200px" class="position-relative d-md-flex">
              <img
                class="img-fluid"
                src="../../assets/images/img4.png"
                alt="img4"
              />
              <div class="p-4">
                <h4 class="mb-3 text-text-dark fw-bold">
                  感謝美食節目、新聞媒體報導
                </h4>
                <p style="color: #594a3e" class="mb-3 fs-5">
                  飄香 40 年台灣在地傳統美食 - 吉祥粽香藏館
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <img
                    src="../../assets/images/polygon-small.svg"
                    alt="polygon-small"
                  />
                  <img
                    src="../../assets/images/Rectangle-m.png"
                    alt="Rectangle-m"
                  />
                  <a
                    class="text-decoration-none fw-bold fs-5 stretched-link"
                    href="#"
                    >查看更多</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.landing-bg {
  background-image: url(../../../src/assets/images/landing.png);
}
.wm-lr {
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
}
.banner-link {
  background-color: #FF700C;
}
.banner-link:hover {
  background-color: #BD5309;
}
.product-link:hover {
  background-color: #FF700C;
}
.cart-hover:hover {
  background-color: #FFE8D9;
}
.text-justify {
  text-align-last: justify;
}
.drop-shadow {
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.48));
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
  border-radius: 50%
}
.product-img::after {
  content: '';
  background-color: #00000080;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 50%
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
      products: [],
      popular: [],
      isLoading: false,
      color: '#FF700C'
    }
  },
  components: {
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
          // this.getPopular()
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
    ...mapActions(cartStore, ['addToCart']),
    getPopular () {
      this.popular = this.products.slice(0, 3)
      console.log(this.popular)
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
