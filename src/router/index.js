import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login'
import RequestPassword from '@/views/RequestPassword'
import UpdatePassword from '@/views/UpdatePassword'
import Tasks from '@/views/Tasks'
import Settings from '@/views/Settings'
import AddUser from '@/views/AddUser'

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
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/settings/adduser',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
