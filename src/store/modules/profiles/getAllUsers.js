import authApi from '@/api/auth'

const state = {
  users: null,
  errors: null
}

export const mutationTypes = {
  getAllUsersStart: '[profiles] Start Get All Users',
  getAllUsersSuccess: '[profiles] Success Get All Users',
  getAllUsersFailure: '[profiles] Failure Get All Users'
}

export const actionTypes = {
  getAllUsers: '[profiles] Get All Users'
}

const mutations = {
  [mutationTypes.getAllUsersStart](state) {
    state.users = null
    state.errors = null
  },
  [mutationTypes.getAllUsersSuccess](state, payload) {
    state.users = payload
  },
  [mutationTypes.getAllUsersFailure](state, payload) {
    state.errors = payload
  }
}

const actions = {
  [actionTypes.getAllUsers](context) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getAllUsersStart)
      authApi
        .getAllUsers()
        .then(response => {
          context.commit(mutationTypes.getAllUsersSuccess, response.data)
          resolve(response.data)
        })
        .catch(result => {
          context.commit(mutationTypes.getAllUsersFailure, result.response.data)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
