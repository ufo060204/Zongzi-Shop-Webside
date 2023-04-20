<template>
  <header class="fixed-top transition">
    <div class="container-md">
      <div class="d-md-flex justify-content-between align-items-center py-3 py-md-5">
        <h1 class="mb-0 d-flex justify-content-between align-items-center">
          <router-link to="/" class="d-block header-logo-img" style="width: 185px;height: 32px; background-repeat: no-repeat; background-size: cover;"></router-link>
          <div class="nav-display align-items-center">
            <router-link class="fs-4 d-block me-4" to="/cart">
              <span class="material-symbols-outlined text-white nav-icon position-relative">
                shopping_cart
              </span>
              <span v-if="cart.length !== 0" style="transform: translate(-50%, -60%);" class="badge rounded-pill bg-danger position-absolute">{{ cart.length }}</span>
            </router-link>
            <div>
              <span data-bs-toggle="collapse" role="button" data-bs-target="#collapseMenu" aria-expanded="false" aria-controls="collapseMenu" class="material-symbols-outlined text-white nav-icon d-block">
                menu
              </span>
            </div>
          </div>
        </h1>
        <nav ref="navCollapse" class="nav-collapse-menu collapse d-md-block" id="collapseMenu">
          <ul class="d-md-flex nav-ul-mobile list-unstyled mb-0">
            <li>
              <router-link to="/about" class="d-block nav-li-mobile text-decoration-none fw-bold me-6 nav-text-white">品牌故事</router-link>
            </li>
            <li>
              <router-link to="/products" class="d-block nav-li-mobile text-decoration-none fw-bold me-6 nav-text-white">美味專區</router-link>
            </li>
            <li class="nav-cart-mobile">
              <router-link to="/cart" class="d-block nav-li-mobile text-decoration-none fw-bold me-2 nav-text-white position-relative">
                購物車
                <span v-if="cart.length !== 0" style="transform: translate(-50%, -70%);" class="badge rounded-pill bg-danger position-absolute top-0 start-100">{{ cart.length }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <RouterView/>
  <footer style="background-color: #241000;">
    <div class="container-md">
      <div class="d-md-flex justify-content-md-between py-7">
        <div>
          <h2 class="m-0">
            <router-link to="/" class="d-block mb-md-10 mb-6 " style="width: 299px;height: 48px;background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679126542123.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ErtmdGsStSzMTGeJbXm5FK%2F1qtn4%2BSJ98A%2B9YgyHA0l2egaQ1vJuJxiC2kyVOnxEUyf641bSK7CtTv7ebmGHNdEmeyfG18%2B%2B%2FbQHzW1WjZdx%2Ft4VYXt40P4KvVxI2D7HdboWyzHCAM%2BoilHaEWRUhAj0QSEqbkAfEnSH9W45agK%2B4M6qwxvUI1fnn29zvV6LfWsfFfE8kCek5tUhLPbNe7%2BpPCS4K0Ra1n9nKGyil8PUAiyASht1k5CgU2SkIF%2F3htwDnqVg6Bj%2BDCH45L61zAJByiuwn4WZpo0EyTskxe1w9jXGBeTmk8xhFt3IssQboiFAcNLPkxcqOSYEJKPJhw%3D%3D'); background-repeat: no-repeat; background-size: cover;"></router-link>
          </h2>
          <div class="d-md-flex d-none align-items-md-center">
            <router-link to="/login" style="background-color: #FFFFFF33;font-size: 12px;" class="footer-link p-2 me-2 fw-bold">後台管理</router-link>
            <p style="color: #FFFFFF80;font-size: 14px;" class="m-0">此專題僅供作品展示，非商業用途使用</p>
          </div>
        </div>
        <div class="d-md-flex mb-md-0 mb-6">
          <div class="ps-md-6 d-md-flex flex-md-column justify-content-md-between footer-border" style="padding-right: 40px;">
            <h5 class="mb-md-0 mb-3 fw-bold text-primary">店鋪地址</h5>
            <p class="mb-md-0 mb-4 text-white fs-5">358 苗栗縣苑裡鎮天下路87號</p>
            <h5 class="mb-md-0 mb-3 fw-bold text-primary">聯絡電話</h5>
            <p class="m-md-0 mb-4">
              <a class="footer-link fs-5" href="tel:0988-789456">0988-789456</a>
            </p>
          </div>
          <div class="ps-md-6 d-md-flex flex-md-column justify-content-md-between footer-border">
            <h5 class="mb-md-0 mb-3 fw-bold text-primary">電子信箱</h5>
            <p class="mb-md-0 mb-4">
              <a class="footer-link fs-5" href="mailto:zongzi0624@gmail.com">zongzi0624@gmail.com</a>
            </p>
            <h5 class="mb-md-0 mb-3 fw-bold text-primary">社群平台</h5>
            <ul style="max-width: 128px;" class="mb-0 d-flex justify-content-between list-unstyled">
              <li><a style="font-size: 23px;" class="footer-link d-block" target="_blank" href="https://www.facebook.com/"><font-awesome-icon icon="fa-brands fa-facebook" /></a></li>
              <li><a style="font-size: 23px;" class="footer-link" target="_blank" href="https://www.instagram.com/"><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
              <li><a style="font-size: 23px;" class="footer-link" target="_blank" href="https://twitter.com/"><font-awesome-icon icon="fa-brands fa-twitter" /></a></li>
            </ul>
          </div>
        </div>
        <div class="d-flex d-md-none align-items-center">
          <router-link to="/login" style="background-color: #FFFFFF33;font-size: 12px;" class="footer-link p-2 me-2 fw-bold">後台管理</router-link>
          <p style="color: #FFFFFF80;font-size: 14px;" class="m-0">此專題僅供作品展示，非商業用途使用</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { RouterView } from 'vue-router'
import cartStore from '../stores/cart'

export default {
  data () {
    return {}
  },
  components: {
    RouterView
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  watch: {
    $route (to, form) {
      this.collapseHide()
    }
  },
  methods: {
    scrollHeader () {
      const header = document.querySelector('header')
      const navIcon = document.querySelectorAll('.nav-icon')
      const navTextColor = document.querySelectorAll('.nav-text-white')
      const headerLogoImg = document.querySelector('.header-logo-img')
      document.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
          header.classList.add('scroll-header-bg')
          headerLogoImg.style['background-image'] = "url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115945853.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hl%2BYMGtpEytDvbP3GhuL%2Bkc6T%2BYsdedskYx1OuLVUpQFu2G8gePCxGoANOZ7WBU1KH6vUG0D4GZtTEHPkEAM6XcX7Ehq3zFg0lPNwJnk2wHLg7T1YUU9Zi613Js3ddxOr4rwZUukUL6elmt85ApZ2G8vMpN24CFwAfh1jecioSsbe2dFFxNjr0FZ5wUAmQdcyzhWiD0Gqp1w0brhx0ZRUg8q6S2YalnmYZw4xsmhPfdIxCfTychXEVb3hESuBMH5PwKdf23wPF5ljMvmAURSEA%2BlDss5b5El5pXQZkWZT3K9HcrN1BNUwcq5QGMwaXwpFYfwbs2XsNEZNTKRoOAR0g%3D%3D')"
          navTextColor.forEach(function (item) {
            item.classList.remove('nav-text-white')
            item.classList.add('nav-text-dark')
          })
          navIcon.forEach(function (item) {
            item.classList.remove('text-white')
            item.classList.add('text-text-dark')
          })
        } else {
          header.classList.remove('scroll-header-bg')
          headerLogoImg.style['background-image'] = "url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679125705044.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H4qNaamHNCtEoWotN%2BZjgVq9Qol%2FY6jm%2FllSdDj%2BwXuwn13x6YN3ypZShFeO8BX51n6YuWoAdKCbntjUIF4ip2sbmCRP5rNLUJ8bMT48SbAp6Qop%2FfwJf2SCWE6aabeBO7%2FkseGZhZwpYE4jJo317QquAXcPBoMlPcTyQ%2BszbiUfD6koa96ELS8WjU9PWgCQbbt4xT%2BFRnL%2B02vrQvCCx%2F52w%2F5RjMG2AHP7blu2Qa2VI%2BRjbZfis2sSxMbNPelcmrdqUumAXwLIV13KttpQJjiq31czfghNtRuB1meN21%2BBHfel226McNir2D4f%2FIiabFmOZRv8ZKRNquZkKs0QZg%3D%3D')"
          navTextColor.forEach(function (item) {
            item.classList.remove('nav-text-dark')
            item.classList.add('nav-text-white')
          })
          navIcon.forEach(function (item) {
            item.classList.remove('text-text-dark')
            item.classList.add('text-white')
          })
        }
      })
    },
    collapseHide () {
      this.$refs.navCollapse.classList.remove('show')
    },
    ...mapActions(cartStore, ['getCarts'])
  },
  mounted () {
    this.scrollHeader()
    this.getCarts()
    this.collapseHide()
  }
}
</script>

<style>
  .scroll-header-bg {
    background-color: #FFFFFF;
    filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08));
  }
  .nav-text-white {
    color: #FFFFFF;
  }
  .nav-text-white:hover {
    color: #FF700C;
  }
  .nav-text-dark {
    color: #3D2F24;
  }
  .nav-link:hover {
  color: #FF700C;
  }
  .header-logo-img {
    background-image: url(../../src/assets/images/logo-header-default.png);
  }
  .transition {
    transition: all 0.5s ease;
  }
  .footer-link {
    color: #FFFFFF;
  }
  .footer-link:hover {
    color: #FFFFFF;
    opacity: 0.8;
  }
</style>
