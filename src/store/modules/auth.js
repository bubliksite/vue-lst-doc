import authApi from '@/api/auth'

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
  messages: null
}

export const mutationTypes = {
  loginStart: '[auth] Start Login',
  loginSuccess: '[auth] Success Login',
  loginFailure: '[auth] Failure Login',

  requestPasswordStart: '[auth] Start Request Password',
  requestPasswordSuccess: '[auth] Success Request Password',
  requestPasswordFailure: '[auth] Failure Request Password',

  updatePasswordStart: '[auth] Start Update Password',
  updatePasswordSuccess: '[auth] Success Update Password',
  updatePasswordFailure: '[auth] Failure Update Password',

  getUpdatedEmailStart: '[auth] Start Update Password',
  getUpdatedEmailSuccess: '[auth] Success Update Password',
  getUpdatedEmailFailure: '[auth] Failure Update Password'
}

export const actionTypes = {
  login: '[auth] login',
  sendNewPassword: '[auth] send new password',
  requestPassword: '[auth] request password',
  getUpdatedEmail: '[auth] get updated email',
  updatePassword: '[auth] update password'
}

const mutations = {
  [mutationTypes.loginStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationTypes.loginSuccess](state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  [mutationTypes.loginFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },

  [mutationTypes.requestPasswordStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationTypes.requestPasswordSuccess](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  [mutationTypes.requestPasswordFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },

  [mutationTypes.getUpdatedEmailStart](state) {
    state.messages = null
  },
  [mutationTypes.getUpdatedEmailSuccess](state, payload) {
    state.messages = payload
  },
  [mutationTypes.getUpdatedEmailFailure](state, payload) {
    state.messages = payload
  },

  [mutationTypes.updatePasswordStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationTypes.updatePasswordSuccess](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  [mutationTypes.updatePasswordFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  }
}

const actions = {
  [actionTypes.login](context, credentials) {
    return new Promise(resolve => {
      context.commit(mutationTypes.loginStart)
      authApi
        .login(credentials)
        .then(response => {
          context.commit(mutationTypes.loginSuccess, response.data)
          localStorage.setItem('lstToken', response.data.token)
          resolve(response.data)
        })
        .catch(result => {
          context.commit(mutationTypes.loginFailure, result.response.data)
        })
    })
  },

  [actionTypes.requestPassword](context, credentials) {
    return new Promise(resolve => {
      context.commit(mutationTypes.requestPasswordStart)
      authApi
        .requestPassword(credentials)
        .then(response => {
          context.commit(mutationTypes.requestPasswordSuccess, response.data)
          resolve(response.data)
        })
        .catch(result => {
          context.commit(
            mutationTypes.requestPasswordFailure,
            result.response.data
          )
        })
    })
  },

  [actionTypes.sendNewPassword](context, credentials) {
    return new Promise(() => {
      authApi.sendNewPassword(credentials)
    })
  },
  [actionTypes.getUpdatedEmail](context, {token}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getUpdatedEmailStart)
      authApi
        .getUpdatedEmail(token)
        .then(email => {
          context.commit(mutationTypes.getUpdatedEmailSuccess, email)
          resolve(email)
        })
        .catch(result => {
          context.commit(
            mutationTypes.getUpdatedEmailFailure,
            result.response.data
          )
        })
    })
  },
  [actionTypes.updatePassword](context, credentials) {
    return new Promise(resolve => {
      context.commit(mutationTypes.updatePasswordStart)
      authApi
        .updatePassword(credentials)
        .then(response => {
          context.commit(mutationTypes.updatePasswordSuccess, response.data)
          resolve(response.data)
        })
        .catch(result => {
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
