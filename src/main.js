import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap/scss/bootstrap.scss'
import './assets/styles/index.scss'

import {IconsPlugin} from 'bootstrap-vue'

import Vuelidate from 'vuelidate/src'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
