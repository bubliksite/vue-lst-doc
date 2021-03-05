import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login'
import RequestPassword from '@/views/RequestPassword'
import UpdatePassword from '../views/UpdatePassword'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/password',
    name: 'RequestPassword',
    component: RequestPassword
  },
  {
    path: '/password/:token',
    name: 'UpdatePassword',
    component: UpdatePassword
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
