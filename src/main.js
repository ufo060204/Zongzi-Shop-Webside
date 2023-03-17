import { createApp } from 'vue'
import Loading, { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import { createPinia } from 'pinia'

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// import { required, email, min } from '@vee-validate/rules'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/all.scss'

// defineRule('required', required)
// defineRule('email', email)
// defineRule('min', min)
configure({
  // Generates an English message locale generator
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})
setLocale('zh_TW')

const pinia = createPinia()
const app = createApp(App)

app.use(LoadingPlugin, {
  color: '##FF700C'
})
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('VueLoading', Loading) // 全域元件
app.use(VueAxios, axios) // 套件
app.use(pinia)
app.use(router)
app.mount('#app')
