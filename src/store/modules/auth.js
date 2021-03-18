import authApi from '@/api/auth'

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
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

  getUpdatedEmailStart: '[auth] Start Get Email',
  getUpdatedEmailSuccess: '[auth] Success Get Email',
  getUpdatedEmailFailure: '[auth] Failure Get Email',

  isLoggedInStart: '[auth] Start Is Logged In',
  isLoggedInSuccess: '[auth] Success Is Logged In',
  isLoggedInFailure: '[auth] Failure Is Logged In',

  clearValidationError: '[auth] Clear Validation Errors',

  logout: '[auth] Logout'
}

export const actionTypes = {
  login: '[auth] login',
  logout: '[auth] logout',
  sendNewPassword: '[auth] send new password',
  requestPassword: '[auth] request password',
  getUpdatedEmail: '[auth] get updated email',
  updatePassword: '[auth] update password',
  isLoggedIn: '[auth] is logged in',
  clearValidationError: '[auth] clear validation errors'
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
    state.validationErrors = null
    state.isSubmitting = true
  },
  [mutationTypes.getUpdatedEmailSuccess](state, payload) {
    state.currentUser = payload
    state.isSubmitting = false
  },
  [mutationTypes.getUpdatedEmailFailure](state, payload) {
    state.validationErrors = payload
    state.isSubmitting = false
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
  },

  [mutationTypes.isLoggedInStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
    state.currentUser = null
  },
  [mutationTypes.isLoggedInSuccess](state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
  },
  [mutationTypes.isLoggedInFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },

  [mutationTypes.clearValidationError](state) {
    state.validationErrors = null
  },

  [mutationTypes.logout](state) {
    state.currentUser = null
    state.isLoggedIn = false
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
  },

  [actionTypes.isLoggedIn](context, {token}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.isLoggedInStart)
      authApi
        .isLoggedIn(token)
        .then(response => {
          context.commit(mutationTypes.isLoggedInSuccess, response.data)
          resolve(response.data)
        })
        .catch(result => {
          context.commit(mutationTypes.isLoggedInFailure, result.response.data)
        })
    })
  },
  [actionTypes.clearValidationError](context) {
    context.commit(mutationTypes.clearValidationError)
  },
  [actionTypes.logout](context, {token}) {
    authApi.logout(token).then(() => {
      context.commit(mutationTypes.logout)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
