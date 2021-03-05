import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap/scss/bootstrap.scss'
import './assets/styles/index.scss'

import Vuelidate from 'vuelidate/src'

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
