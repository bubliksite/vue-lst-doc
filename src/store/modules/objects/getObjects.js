import objApi from '@/api/objects'

const state = {
  objects: null,
  errors: null
}

export const mutationTypes = {
  getObjectsStart: '[objects] Start Get Objects',
  getObjectsSuccess: '[objects] Success Get Objects',
  getObjectsFailure: '[objects] Failure Get Objects'
}

export const actionTypes = {
  getObjects: '[objects] Get Objects'
}

const mutations = {
  [mutationTypes.getObjectsStart](state) {
    state.objects = null
    state.errors = null
  },
  [mutationTypes.getObjectsSuccess](state, payload) {
    state.objects = payload
  },
  [mutationTypes.getObjectsFailure](state, payload) {
    state.errors = payload
  }
}

const actions = {
  [actionTypes.getObjects](context) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getObjectsStart)
      objApi
        .getObjects()
        .then(response => {
          context.commit(mutationTypes.getObjectsSuccess, response.data)
          resolve(response.data)
        })
        .catch(result => {
          context.commit(mutationTypes.loginFailure, result.response.data)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
