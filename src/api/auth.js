import axios from './axios'

const registration = (credentials) => {
  return axios.post('/auth/registration', {user: credentials})
}

const login = (credentials) => {
  return axios.post('/auth/login', {user: credentials})
}

const requestPassword = (credentials) => {
  return axios.post('/auth/requestPassword', {
    user: credentials
  })
}

const updatePassword = (credentials) => {
  return axios.post(`/auth/updatePassword/`, {
    user: credentials
  })
}

const getUpdatedEmail = (token) => {
  return axios
    .get(`/auth/updatePassword/${token}`)
    .then((response) => response.data)
}

const isLoggedIn = (token) => {
  return axios.get(`/auth/login/${token}`)
}

const sendNewPassword = (credentials) => {
  return axios.post('/mailer/requestPassword', {
    user: credentials
  })
}

const logout = (token) => {
  return axios.post('/auth/logout', {token})
}

export default {
  registration,
  login,
  logout,
  requestPassword,
  sendNewPassword,
  getUpdatedEmail,
  updatePassword,
  isLoggedIn
}
