import profilesApi from '@/api/profiles'

const state = {
  isSubmitting: false,
  user: null,
  errors: null
}

export const mutationTypes = {
  getUserStart: '[profiles] Start Get User',
  getUserSuccess: '[profiles] Success Get User',
  getUserFailure: '[profiles] Failure Get User'
}

export const actionTypes = {
  getUser: '[profiles] Get User'
}

const mutations = {
  [mutationTypes.getUserStart](state) {
    state.isSubmitting = true
    state.user = null
    state.errors = null
  },
  [mutationTypes.getUserSuccess](state, payload) {
    state.isSubmitting = false
    state.user = payload.user
  },
  [mutationTypes.getUserFailure](state, payload) {
    state.isSubmitting = false
    state.errors = payload
  }
}

const actions = {
  [actionTypes.getUser](context, {id}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getUserStart)
      profilesApi
        .getUser(id)
        .then((user) => {
          context.commit(mutationTypes.getUserSuccess, user)
          resolve(user)
        })
        .catch((result) => {
          context.commit(mutationTypes.getUserFailure, result.response.data)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
