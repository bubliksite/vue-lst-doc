import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/modules/auth'
import getRoles from '@/store/modules/profiles/getRoles'
import getAllUsers from '@/store/modules/profiles/getAllUsers'
import getObjects from '@/store/modules/objects/getObjects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    getRoles,
    getAllUsers,
    getObjects
  }
})
