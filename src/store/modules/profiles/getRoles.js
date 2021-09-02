import profilesApi from '@/api/profiles'

const state = {
  roles: null,
  errors: null
}

export const mutationTypes = {
  getRolesStart: '[profiles] Start Get Roles',
  getRolesSuccess: '[profiles] Success Get Roles',
  getRolesFailure: '[profiles] Failure Get Roles'
}

export const actionTypes = {
  getRoles: '[profiles] Get Roles'
}

const mutations = {
  [mutationTypes.getRolesStart](state) {
    state.roles = null
    state.errors = null
  },
  [mutationTypes.getRolesSuccess](state, payload) {
    state.roles = payload
  },
  [mutationTypes.getRolesFailure](state, payload) {
    state.errors = payload
  }
}

const actions = {
  [actionTypes.getRoles](context) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getRolesStart)
      profilesApi
        .getRoles()
        .then((response) => {
          context.commit(mutationTypes.getRolesSuccess, response.data)
          resolve(response.data)
        })
        .catch((result) => {
          context.commit(mutationTypes.getRolesFailure, result.response.data)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
