import authApi from '@/api/auth'

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
}

export const mutationTypes = {
  registrationStart: '[auth] Start Registration',
  registrationSuccess: '[auth] Success Registration',
  registrationFailure: '[auth] Failure Registration',

  loginStart: '[auth] Start Login',
  loginSuccess: '[auth] Success Login',
  loginFailure: '[auth] Failure Login',

  requestPasswordStart: '[auth] Start Request Password',
  requestPasswordSuccess: '[auth] Success Request Password',
  requestPasswordFailure: '[auth] Failure Request Password',

  isLoggedInStart: '[auth] Start Is Logged In',
  isLoggedInSuccess: '[auth] Success Is Logged In',
  isLoggedInFailure: '[auth] Failure Is Logged In',

  clearValidationError: '[auth] Clear Validation Errors',

  logout: '[auth] Logout'
}

export const actionTypes = {
  registration: '[auth] registration',
  login: '[auth] login',
  logout: '[auth] logout',
  sendNewPassword: '[auth] send new password',
  requestPassword: '[auth] request password',
  isLoggedIn: '[auth] is logged in',
  clearValidationError: '[auth] clear validation errors'
}

const mutations = {
  [mutationTypes.registrationStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationTypes.registrationSuccess](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  [mutationTypes.registrationFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },

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

  [mutationTypes.isLoggedInStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
    state.currentUser = null
  },
  [mutationTypes.isLoggedInSuccess](state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
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
  [actionTypes.registration](context, credentials) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.registrationStart)
      authApi
        .registration(credentials)
        .then((response) => {
          context.commit(mutationTypes.registrationSuccess, response.data)
          resolve(response.data)
        })
        .catch((result) => {
          context.commit(
            mutationTypes.registrationFailure,
            result.response.data
          )
        })
    })
  },

  [actionTypes.login](context, credentials) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.loginStart)
      authApi
        .login(credentials)
        .then((response) => {
          context.commit(mutationTypes.loginSuccess, response.data)
          localStorage.setItem('lstToken', response.data.token)
          resolve(response.data)
        })
        .catch((result) => {
          context.commit(mutationTypes.loginFailure, result.response.data)
        })
    })
  },

  [actionTypes.requestPassword](context, credentials) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.requestPasswordStart)
      authApi
        .requestPassword(credentials)
        .then((response) => {
          context.commit(mutationTypes.requestPasswordSuccess, response.data)
          resolve(response.data)
        })
        .catch((result) => {
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

  [actionTypes.isLoggedIn](context, {token}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.isLoggedInStart)
      authApi
        .isLoggedIn(token)
        .then((response) => {
          context.commit(mutationTypes.isLoggedInSuccess, response.data)
          resolve(response.data)
        })
        .catch((result) => {
          context.commit(mutationTypes.isLoggedInFailure, result.response.data)
          localStorage.removeItem('lstToken')
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
