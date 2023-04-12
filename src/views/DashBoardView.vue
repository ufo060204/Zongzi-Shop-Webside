<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">這是後台頁面</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link">後台產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/article" class="nav-link">後台文章列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link">後台訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link">後台優惠券列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">回前台首頁</router-link>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="logout" class="nav-link">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <!-- 預設隱藏 RouterView ，當函式 checkLogin 驗證成功再將 RouterView 顯示 -->
    <div class="container">
      <RouterView v-if="checkLogin"></RouterView>
    </div>
</template>

<script>
import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env

export default {
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = `ufoToken=; expires=${new Date()};`
      this.$router.push('/login')
    },
    checkLogin () {
      // 取出 token
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)ufoToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${VITE_APP_URL}api/user/check`
      this.$http
        .post(url)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
