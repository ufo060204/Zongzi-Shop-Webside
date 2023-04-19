<template>
  <section class="landing-img landing-header"></section>
  <VueLoading :active="isLoading" :color="color" :z-index="9999"/>
  <section style="background-color: #F0EDE5">
    <main>
      <div class="container">
        <div style="height: 100vh;" class="row justify-content-center align-items-center">
          <div class="col-md-4">
            <h1 class="text-center fs-4">後台管理</h1>
            <form id="form" class="form-signin">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="username"
                  v-model="user.username"
                  placeholder="name@example.com"
                  required
                  autofocus
                />
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="user.password"
                  placeholder="Password"
                  required
                />
                <label for="password">Password</label>
              </div>
              <button
                class="btn btn-lg btn-text-dark w-100 mt-3"
                type="button" @click="login"
                id="login"
              >
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false,
      color: '#FF700C'
    }
  },
  methods: {
    login () {
      const url = `${VITE_APP_URL}admin/signin`
      this.isLoading = true
      this.$http
        .post(url, this.user)
        .then((res) => {
          // 將 token 取出
          // 解構的寫法
          const { expired, token } = res.data
          // 儲存 token
          document.cookie = `ufoToken=${token}; expires=${new Date(expired)};`
          this.isLoading = false
          this.$router.push('/admin/products')
        })
        .catch(err => {
          this.isLoading = false
          Swal.fire(err.message)
        })
    }
  },
  mounted () {
  }
}
</script>
