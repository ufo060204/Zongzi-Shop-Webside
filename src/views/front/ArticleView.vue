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
                <li class="breadcrumb-item active" aria-current="page">最新消息</li>
              </ol>
            </nav>
          </div>
          <div class="card border-0 mb-3">
            <div class="row g-0">
              <div class="col-lg-12">
                <img style="height: 100%;" :src="article.imageUrl" class="img-fluid rounded-start w-100" alt="imageUrl">
              </div>
              <div class="col-lg-12">
                <div class="card-body h-100 bg-bg border-0 d-md-flex flex-column justify-content-between">
                  <div>
                    <h1 class="card-title fs-3 py-4 text-center fw-500">{{ article.description }}</h1>
                    <p class="card-text fs-5 lh-lg">{{ article.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="btn d-block py-3 fs-5 w-100 fw-bold text-decoration-none border border-text-dark" type="button">
            <router-link class="text-decoration-none text-text-dark" to="/products" title="前往產品頁面">前往產品</router-link>
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
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      article: {},
      isLoading: false,
      color: '#FF700C'
    }
  },
  components: {
    Loading
  },
  methods: {
    getArticle () {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/article/${id}`)
        .then(res => {
          this.article = res.data.article
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  },
  mounted () {
    this.getArticle()
  }
}
</script>
