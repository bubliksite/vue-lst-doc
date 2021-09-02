import authApi from '@/api/auth'

const state = {
  isSubmitting: false,
  errors: null
}

export const mutationTypes = {
  updatePasswordStart: '[auth] Start Update Password',
  updatePasswordSuccess: '[auth] Success Update Password',
  updatePasswordFailure: '[auth] Failure Update Password'
}

export const actionTypes = {
  updatePassword: '[auth] update password'
}

const mutations = {
  [mutationTypes.updatePasswordStart](state) {
    state.isSubmitting = true
    state.errors = null
  },
  [mutationTypes.updatePasswordSuccess](state, payload) {
    state.isSubmitting = false
    state.errors = payload
  },
  [mutationTypes.updatePasswordFailure](state, payload) {
    state.isSubmitting = false
    state.errors = payload
  }
}

const actions = {
  [actionTypes.updatePassword](context, credentials) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.updatePasswordStart)
      authApi
        .updatePassword(credentials)
        .then((response) => {
          context.commit(mutationTypes.updatePasswordSuccess, response.data)
          resolve(response.data)
        })
        .catch((result) => {
          context.commit(
            mutationTypes.updatePasswordFailure,
            result.response.data
          )
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
