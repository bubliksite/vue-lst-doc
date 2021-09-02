import axios from './axios'

const getAllUsers = () => {
  return axios.get('/users/all')
}

const getUser = (id) => {
  return axios.get(`/users/${id}`).then((response) => response.data)
}

const getRoles = () => {
  return axios.get('/users/roles')
}

export default {
  getAllUsers,
  getUser,
  getRoles
}
