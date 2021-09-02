import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import RequestPassword from '../views/RequestPassword'
import UpdatePassword from '../views/UpdatePassword'
import Tasks from '../views/Tasks'
import Settings from '../views/Users'
import AddUser from '../views/AddUser'
import Error404 from '../views/Error404'
import Profile from '../views/Profile'

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
    path: '/users',
    name: 'Users',
    component: Settings
  },
  {
    path: '/users/adduser',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/users/:id',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
