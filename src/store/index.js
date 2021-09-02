import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/modules/auth'

import getUpdatedEmail from '@/store/modules/auth/getUpdatedEmail'
import updatePassword from '@/store/modules/auth/updatePassword'

import getRoles from '@/store/modules/profiles/getRoles'
import getUser from '@/store/modules/profiles/getUser'
import getAllUsers from '@/store/modules/profiles/getAllUsers'

import getObjects from '@/store/modules/objects/getObjects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    getRoles,
    getAllUsers,
    getUser,
    getObjects,
    getUpdatedEmail,
    updatePassword
  }
})
