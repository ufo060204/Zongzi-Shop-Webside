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
          <div class="row g-0 justify-content-center">
            <div class="col-lg-9">
              <img style="height: 100%;" :src="article.imageUrl" class="text-center img-fluid rounded-start" alt="imageUrl">
            </div>
            <div class="col-lg-9">
              <div class="card-body h-100 bg-bg border-0 d-md-flex flex-column justify-content-between">
                <div>
                  <h1 class="fw-bolder fs-4 py-4 text-center">{{ article.description }}</h1>
                  <div class="zongzi-text fs-5"></div>
                </div>
              </div>
            </div>
            <button class="col-lg-9 btn d-block py-3 fs-5 fw-bold text-decoration-none border border-text-dark" type="button">
              <router-link class="text-decoration-none text-text-dark" to="/products" title="前往產品頁面">前往產品</router-link>
            </button>
          </div>
        </main>
      </div>
    </section>
</template>

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
      const zongziText = document.querySelector('.zongzi-text')
      const { id } = this.$route.params
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/article/${id}`)
        .then(res => {
          this.article = res.data.article
          zongziText.innerHTML = res.data.article.content
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

<style>
  .product-img {
    object-fit: cover;
  }
</style>
