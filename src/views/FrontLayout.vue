<template>
  <header class="fixed-top transition">
    <div class="container-md">
      <div class="d-md-flex justify-content-between align-items-md-center py-5">
        <h1 class="mb-0">
          <router-link to="/" class="d-block header-logo-img" style="width: 185px;height: 32px; background-repeat: no-repeat; background-size: cover;"></router-link>
        </h1>
        <nav>
          <ul class="d-md-flex list-unstyled mb-0">
            <li>
              <router-link to="/about" class="text-decoration-none fw-bold me-6 nav-text-white">品牌故事</router-link>
            </li>
            <li>
              <router-link to="/products" class="text-decoration-none fw-bold me-6 nav-text-white">美味專區</router-link>
            </li>
            <li>
              <router-link to="/cart" class="text-decoration-none fw-bold me-2 nav-text-white position-relative">
                購物車
                <span v-if="cart.length !== 0" style="transform: translate(-50%, -70%);" class="badge rounded-pill bg-danger position-absolute top-0 start-100">{{ cart.length }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <RouterView></RouterView>
  <footer style="background-color: #241000;">
    <div class="container-md">
      <div class="d-md-flex justify-content-md-between py-7">
        <div>
          <h2 class="m-0">
            <router-link to="/" class="d-block mb-10" style="width: 299px;height: 48px;background-image:url(../../src/assets/images/logo-footer-default.png); background-repeat: no-repeat; background-size: cover;"></router-link>
          </h2>
          <div class="d-md-flex align-items-md-center">
            <router-link to="/admin/products" style="background-color: #FFFFFF33;font-size: 12px;" class="text-decoration-none text-white p-2 me-2 fw-bold">後台管理</router-link>
            <p style="color: #FFFFFF80;font-size: 14px;" class="m-0">此專題僅供作品展示，非商業用途使用</p>
          </div>
        </div>
        <div class="d-md-flex">
          <div class="ps-6 d-md-flex flex-md-column justify-content-md-between" style="border-left: 1px solid #FFFFFF80; padding-right: 40px;">
            <h5 class="mb-0 fw-bold text-primary">店鋪地址</h5>
            <p class="mb-0 text-white fs-5">358 苗栗縣苑裡鎮天下路87號</p>
            <h5 class="mb-0 fw-bold text-primary">聯絡電話</h5>
            <p class="m-0 text-white fs-5">0988-789456</p>
          </div>
          <div class="ps-6 d-md-flex flex-md-column justify-content-md-between" style="border-left: 1px solid #FFFFFF80;">
            <h5 class="mb-0 fw-bold text-primary">電子信箱</h5>
            <p class="mb-0 text-white fs-5">zongzi0624@gmail.com</p>
            <h5 class="mb-0 fw-bold text-primary">社群平台</h5>
            <ul class="d-md-flex list-unstyled">
              <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

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
</style>

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
  methods: {
    scrollHeader () {
      const header = document.querySelector('header')
      // const navTextColor = document.querySelectorAll('.nav-text-white')
      const navTextColor = document.querySelectorAll('.nav-text-white')
      const headerLogoImg = document.querySelector('.header-logo-img')
      console.log(navTextColor)
      // console.log(header)
      // console.log(headerLogoImg)
      document.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
          // header.setAttribute('class', 'scroll-header-bg')
          // navTextColor.setAttribute('class', 'text-primary')
          header.classList.add('scroll-header-bg')
          headerLogoImg.style['background-image'] = 'url(../../src/assets/images/logo-header-scroll.png)'
          navTextColor.forEach(function (item) {
            item.classList.remove('nav-text-white')
            item.classList.add('nav-text-dark')
            // item.style.color = '#3D2F24'
          })
          // navTextColor.forEach((e) => {
          //   navTextColor.add('text-text-dark')
          // })
        } else {
          // header.removeAttribute('class', 'scroll-header-bg')
          header.classList.remove('scroll-header-bg')
          headerLogoImg.style['background-image'] = 'url(../../src/assets/images/logo-header-default.png)'
          navTextColor.forEach(function (item) {
            item.classList.remove('nav-text-dark')
            item.classList.add('nav-text-white')
            // item.style.color = '#FFFFFF'
          })
        }
      })
    },
    ...mapActions(cartStore, ['getCarts'])
  },
  mounted () {
    this.scrollHeader()
    this.getCarts()
  }
}

</script>
