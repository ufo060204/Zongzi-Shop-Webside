<template>
  <div class="d-flex flex-column vh-100">
    <header :class="{ 'bg-white scroll-header-shadow': mobileHeadBg }" class="fixed-top transition">
      <div class="container-md">
        <div class="d-md-flex justify-content-between align-items-center">
          <h2 class="mb-0 d-flex justify-content-between align-items-center py-3 py-md-5">
            <router-link to="/" :style="{ backgroundImage: `url(${headerLogoBg})` }" class="d-block header-logo-img" style="width: 185px;height: 32px; background-repeat: no-repeat; background-size: cover;"></router-link>
            <div class="d-flex d-md-none align-items-center">
              <router-link class="fs-4 d-block me-4" to="/cart">
                <span class="material-symbols-outlined nav-icon position-relative" :class="{ 'text-text-dark': mobileHeadBg, 'text-white': !mobileHeadBg}">
                  shopping_cart
                </span>
                <span v-if="cart.length !== 0" style="transform: translate(-50%, -60%);" class="badge rounded-pill bg-danger position-absolute">{{ cart.length }}</span>
              </router-link>
              <div @click="() => changeHeader()">
                <span data-bs-toggle="collapse" role="button" data-bs-target="#collapseMenu" aria-expanded="false" aria-controls="collapseMenu" :class="{ 'text-text-dark': mobileHeadBg, 'text-white': !mobileHeadBg}" class="material-symbols-outlined  nav-icon d-block">
                  {{ navMenuIcon }}
                </span>
              </div>
            </div>
          </h2>
          <nav class="d-none d-md-block">
            <ul class="d-md-flex text-center m-0 py-11 py-md-0">
              <li>
                <router-link to="/about" class="d-block nav-link text-decoration-none fw-bold me-md-6 py-2" :class="{ 'text-text-dark': mobileHeadBg, 'text-white': !mobileHeadBg}">品牌故事</router-link>
              </li>
              <li>
                <router-link to="/products" class="d-block nav-link text-decoration-none fw-bold me-md-6 py-2" :class="{ 'text-text-dark': mobileHeadBg, 'text-white': !mobileHeadBg}">美味專區</router-link>
              </li>
              <li class="d-none d-md-block">
                <router-link to="/cart" class="d-block nav-link text-decoration-none fw-bold me-md-2 py-2 position-relative" :class="{ 'text-text-dark': mobileHeadBg, 'text-white': !mobileHeadBg}">
                  購物車
                  <span v-if="cart.length !== 0" style="transform: translate(-50%, -30%);" class="badge rounded-pill bg-danger position-absolute top-0 start-100">{{ cart.length }}</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav ref="navCollapse" class="collapse bg-bg" id="collapseMenu">
        <ul class="d-md-flex text-center m-0 py-11 py-md-0">
          <li>
            <router-link to="/about" class="d-block text-decoration-none fw-bold me-md-6 py-2 text-text-dark text-md-white">品牌故事</router-link>
          </li>
          <li>
            <router-link to="/products" class="d-block text-decoration-none fw-bold me-md-6 py-2 text-text-dark text-md-white">美味專區</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <div class="flex-grow-1">
      <RouterView />
    </div>

    <footer class="bg-footer">
      <div class="container-md">
        <div class="d-md-flex justify-content-md-between py-7">
          <div>
            <h2 class="m-0">
              <router-link to="/" class="d-block mb-md-10 mb-6" style="width: 299px;height: 48px; background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679126542123.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ErtmdGsStSzMTGeJbXm5FK%2F1qtn4%2BSJ98A%2B9YgyHA0l2egaQ1vJuJxiC2kyVOnxEUyf641bSK7CtTv7ebmGHNdEmeyfG18%2B%2B%2FbQHzW1WjZdx%2Ft4VYXt40P4KvVxI2D7HdboWyzHCAM%2BoilHaEWRUhAj0QSEqbkAfEnSH9W45agK%2B4M6qwxvUI1fnn29zvV6LfWsfFfE8kCek5tUhLPbNe7%2BpPCS4K0Ra1n9nKGyil8PUAiyASht1k5CgU2SkIF%2F3htwDnqVg6Bj%2BDCH45L61zAJByiuwn4WZpo0EyTskxe1w9jXGBeTmk8xhFt3IssQboiFAcNLPkxcqOSYEJKPJhw%3D%3D'); background-repeat: no-repeat; background-size: cover;"></router-link>
            </h2>
            <div class="d-md-flex d-none align-items-md-center">
              <router-link to="/login" class="d-none footer-link text-white fs-12 bg-white bg-opacity-20 p-2 me-2 fw-bold transition">後台管理</router-link>
              <p class="mx-auto m-0 fs-14 text-white text-opacity-50">此專題僅供作品展示，非商業用途使用</p>
            </div>
          </div>
          <div class="d-md-flex mb-md-0 mb-6">
            <div class="ps-md-6 d-md-flex flex-md-column justify-content-md-between pe-40 border-lg-white border-opacity-lg-50 border-start-lg">
              <h5 class="mb-md-0 mb-3 fw-bold text-primary">店鋪地址</h5>
              <p class="mb-md-0 mb-4 text-white fs-5">358 苗栗縣苑裡鎮天下路87號</p>
              <h5 class="mb-md-0 mb-3 fw-bold text-primary">聯絡電話</h5>
              <p class="m-md-0 mb-4">
                <a class="footer-link text-white fs-5 transition" href="tel:0988-789456">0988-789456</a>
              </p>
            </div>
            <div class="ps-md-6 d-md-flex flex-md-column justify-content-md-between border-lg-white border-opacity-lg-50 border-start-lg">
              <h5 class="mb-md-0 mb-3 fw-bold text-primary">電子信箱</h5>
              <p class="mb-md-0 mb-4">
                <a class="footer-link text-white fs-5 transition" href="mailto:zongzi0624@gmail.com">zongzi0624@gmail.com</a>
              </p>
              <h5 class="mb-md-0 mb-3 fw-bold text-primary">社群平台</h5>
              <ul class="mw-128px mb-0 d-flex justify-content-between">
                <li><a class="footer-link text-white fs-4 d-block transition" target="_blank" href="https://www.facebook.com/"><font-awesome-icon icon="fa-brands fa-facebook" /></a></li>
                <li><a class="footer-link text-white fs-4 transition" target="_blank" href="https://www.instagram.com/"><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
                <li><a class="footer-link text-white fs-4 transition" target="_blank" href="https://twitter.com/"><font-awesome-icon icon="fa-brands fa-twitter" /></a></li>
              </ul>
            </div>
          </div>
          <div class="d-flex d-md-none align-items-center">
            <router-link to="/login" class="footer-link text-white bg-white bg-opacity-20 p-2 me-2 fw-bold fs-12">後台管理</router-link>
            <p class="m-0 fs-14 text-white text-opacity-50">此專題僅供作品展示，非商業用途使用</p>
          </div>
        </div>
      </div>
    </footer>
    <GoToTop />
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { RouterView } from 'vue-router'
import cartStore from '../stores/cart'
import GoToTop from '../components/GoToTop.vue'

export default {
  data () {
    return {
      headerLogoBg: 'https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679125705044.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H4qNaamHNCtEoWotN%2BZjgVq9Qol%2FY6jm%2FllSdDj%2BwXuwn13x6YN3ypZShFeO8BX51n6YuWoAdKCbntjUIF4ip2sbmCRP5rNLUJ8bMT48SbAp6Qop%2FfwJf2SCWE6aabeBO7%2FkseGZhZwpYE4jJo317QquAXcPBoMlPcTyQ%2BszbiUfD6koa96ELS8WjU9PWgCQbbt4xT%2BFRnL%2B02vrQvCCx%2F52w%2F5RjMG2AHP7blu2Qa2VI%2BRjbZfis2sSxMbNPelcmrdqUumAXwLIV13KttpQJjiq31czfghNtRuB1meN21%2BBHfel226McNir2D4f%2FIiabFmOZRv8ZKRNquZkKs0QZg%3D%3D',
      headerLogoToggleBg: 'https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115945853.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hl%2BYMGtpEytDvbP3GhuL%2Bkc6T%2BYsdedskYx1OuLVUpQFu2G8gePCxGoANOZ7WBU1KH6vUG0D4GZtTEHPkEAM6XcX7Ehq3zFg0lPNwJnk2wHLg7T1YUU9Zi613Js3ddxOr4rwZUukUL6elmt85ApZ2G8vMpN24CFwAfh1jecioSsbe2dFFxNjr0FZ5wUAmQdcyzhWiD0Gqp1w0brhx0ZRUg8q6S2YalnmYZw4xsmhPfdIxCfTychXEVb3hESuBMH5PwKdf23wPF5ljMvmAURSEA%2BlDss5b5El5pXQZkWZT3K9HcrN1BNUwcq5QGMwaXwpFYfwbs2XsNEZNTKRoOAR0g%3D%3D',
      mobileHeadBg: false,
      isAlternateBgShown: false,
      scrollY: 0,
      navMenuIcon: 'menu',
      navCloseIcon: 'close',
      isNavIconChange: false

    }
  },
  components: {
    RouterView, GoToTop
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  watch: {
    $route (to, form) {
      this.collapseHide()
      this.mobileHeadBg = false
      this.isAlternateBgShown = false
      this.isNavIconChange = false
    },
    isAlternateBgShown () {
      this.headerLogoBg = this.isAlternateBgShown ? this.headerLogoToggleBg : 'https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679125705044.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H4qNaamHNCtEoWotN%2BZjgVq9Qol%2FY6jm%2FllSdDj%2BwXuwn13x6YN3ypZShFeO8BX51n6YuWoAdKCbntjUIF4ip2sbmCRP5rNLUJ8bMT48SbAp6Qop%2FfwJf2SCWE6aabeBO7%2FkseGZhZwpYE4jJo317QquAXcPBoMlPcTyQ%2BszbiUfD6koa96ELS8WjU9PWgCQbbt4xT%2BFRnL%2B02vrQvCCx%2F52w%2F5RjMG2AHP7blu2Qa2VI%2BRjbZfis2sSxMbNPelcmrdqUumAXwLIV13KttpQJjiq31czfghNtRuB1meN21%2BBHfel226McNir2D4f%2FIiabFmOZRv8ZKRNquZkKs0QZg%3D%3D'
    },
    isNavIconChange () {
      this.navMenuIcon = this.isNavIconChange ? this.navCloseIcon : 'menu'
    },
    scrollY (newVal, oldVal) {
      const collapseMenu = document.querySelector('#collapseMenu')
      if (newVal !== 0) {
        this.mobileHeadBg = true
        this.isAlternateBgShown = true
      } else if (newVal === 0 && collapseMenu.classList.contains('show')) {
        this.mobileHeadBg = true
        this.isAlternateBgShown = true
      } else if (newVal === 0) {
        this.mobileHeadBg = false
        this.isAlternateBgShown = false
      }
    }
  },
  methods: {
    handleScroll () {
      this.scrollY = window.scrollY
    },
    collapseHide () {
      this.$refs.navCollapse.classList.remove('show')
    },
    changeHeader () {
      this.isNavIconChange = !this.isNavIconChange
      if (this.scrollY > 0) {
        this.mobileHeadBg = true
        this.isAlternateBgShown = true
      } else if (this.scrollY === 0) {
        this.mobileHeadBg = !this.mobileHeadBg
        this.isAlternateBgShown = !this.isAlternateBgShown
      }
    },
    ...mapActions(cartStore, ['getCarts'])
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll)
    this.getCarts()
    this.collapseHide()
  }
}
</script>

<style lang="scss" scoped>
  .scroll-header-shadow {
    box-shadow: 0px 0px 16px 0px #00000014;
  }
  .nav-link:hover {
  color: #FF700C !important;
  }
  .footer-link:hover {
    opacity: 0.8;
  }
</style>
