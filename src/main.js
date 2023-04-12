import { createApp } from 'vue'
import Loading, { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
/* import the fontawesome core */
import 'hover.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
/* add some free styles */
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { createPinia } from 'pinia'

// 加入 CKEditor
import CKEditor from '@ckeditor/ckeditor5-vue'

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
/* add icons to the library */
library.add(faShoppingCart, faTwitter, faFacebook, faInstagram)

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
// 載入元件
app.use(CKEditor)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('VueLoading', Loading) // 全域元件
app.use(VueAxios, axios) // 套件
app.use(pinia)
app.use(router)
app.mount('#app')
