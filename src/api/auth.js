import axios from './axios'

const registration = credentials => {
  return axios.post('/auth/registration', {user: credentials})
}

const login = credentials => {
  return axios.post('/auth/login', {user: credentials})
}

const requestPassword = credentials => {
  return axios.post('/auth/requestPassword', {
    user: credentials
  })
}

const updatePassword = token => {
  return axios.get(`/auth/updatePassword/${token}`)
}

const getUpdatedEmail = token => {
  return axios
    .post(`https://api.bblk.ga/lst/user/get-updated-email`, {token})
    .then(response => response.data)
}

const isLoggedIn = (token) => {
  return axios.get(`/auth/login/${token}`)
}

const sendNewPassword = credentials => {
  return axios.post('https://mail.bblk.ga/lst/request-password', {
    user: credentials
  })
}

const logout = token => {
  return axios.post('/auth/logout', {token})
}

const getRoles = () => {
  return axios.get('https://api.bblk.ga/lst/user/get-roles')
}

const getAllUsers = () => {
  return axios.get('https://api.bblk.ga/lst/users/get-all')
}

export default {
  registration,
  login,
  logout,
  requestPassword,
  sendNewPassword,
  getUpdatedEmail,
  getRoles,
  getAllUsers,
  updatePassword,
  isLoggedIn
}
