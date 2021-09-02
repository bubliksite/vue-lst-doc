import authApi from '@/api/auth'

const state = {
  isSubmitting: false,
  email: null,
  errors: null
}

export const mutationTypes = {
  getUpdatedEmailStart: '[auth] Start Get Email',
  getUpdatedEmailSuccess: '[auth] Success Get Email',
  getUpdatedEmailFailure: '[auth] Failure Get Email'
}

export const actionTypes = {
  getUpdatedEmail: '[auth] get updated email'
}

const mutations = {
  [mutationTypes.getUpdatedEmailStart](state) {
    state.errors = null
    state.isSubmitting = true
  },
  [mutationTypes.getUpdatedEmailSuccess](state, payload) {
    state.email = payload.email
    state.isSubmitting = false
  },
  [mutationTypes.getUpdatedEmailFailure](state, payload) {
    state.errors = payload
    state.isSubmitting = false
  }
}

const actions = {
  [actionTypes.getUpdatedEmail](context, {token}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getUpdatedEmailStart)
      authApi
        .getUpdatedEmail(token)
        .then((email) => {
          context.commit(mutationTypes.getUpdatedEmailSuccess, email)
          resolve(email)
        })
        .catch((result) => {
          context.commit(
            mutationTypes.getUpdatedEmailFailure,
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
