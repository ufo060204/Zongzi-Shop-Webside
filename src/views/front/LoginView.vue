<template>
  <section class="landing-img landing-header"></section>
  <section style="background-color: #F0EDE5">
    <main>
      <div class="container">
        <div style="height: 100vh;" class="row justify-content-center align-items-center">
          <div class="col-6">
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
                class="btn btn-lg btn-primary w-100 mt-3"
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
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const url = `${VITE_APP_URL}admin/signin`
      this.$http
        .post(url, this.user)
        .then((res) => {
          // 將 token 取出
          // 解構的寫法
          const { expired, token } = res.data
          // 儲存 token
          document.cookie = `ufoToken=${token}; expires=${new Date(expired)};`
          this.$router.push('/admin/products')
        })
        .catch(err => {
          alert(err.message)
        })
    }
  },
  mounted () {
  }
}
</script>
