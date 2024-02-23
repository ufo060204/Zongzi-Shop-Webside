<template>
    <section class="landing-img landing-header" />
    <section class="bg-bg">
      <div class="container-lg">
        <loading v-model:active="isLoading"
                :can-cancel="false"
                :color="color"/>
        <main class="pb-7 pb-lg-8">
          <div class="pt-7 pt-lg-8 d-flex align-items-end">
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
              <img :src="article.imageUrl" class="text-center img-fluid rounded-start h-100" alt="imageUrl">
            </div>
            <div class="col-lg-9 mb-3">
              <div class="card-body h-100 bg-bg border-0 d-md-flex flex-column justify-content-between">
                <div>
                  <h1 class="fw-bolder fs-4 pt-4 pb-2 text-center">{{ article.description }}</h1>
                  <div class="text-center pb-2">
                    <button @click="copyCouponCode('zongzi40')" type="button" class="btn btn-zongzi">馬上領取週年優惠！</button>
                  </div>
                  <div class="zongzi-text fs-5"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <router-link to="/products" class="btn d-flex aligns-center py-3 fs-5 fw-bold text-text-dark border border-text-light" title="前往產品頁面">
                <span class="mx-auto">前往產品</span>
                <span class="material-symbols-outlined">
                  arrow_forward
                </span>
              </router-link>
            </div>
          </div>
        </main>
      </div>
    </section>
</template>

<script>
import Loading from 'vue-loading-overlay'
import Swal from 'sweetalert2'
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
    },
    copyCouponCode (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          // console.log('優惠碼', text)
          Swal.fire({
            icon: 'success',
            showConfirmButton: false,
            title: '優惠碼複製成功！',
            timer: 1000
          })
        })
    }
  },
  mounted () {
    this.getArticle()
  }
}
</script>
