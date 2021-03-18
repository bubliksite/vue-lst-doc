import axios from 'axios'

const login = credentials => {
  return axios.post('https://api.bblk.ga/lst/login', {user: credentials})
}

const requestPassword = credentials => {
  return axios.post('https://api.bblk.ga/lst/user/request-password', {
    user: credentials
  })
}

const updatePassword = credentials => {
  return axios.post(`https://api.bblk.ga/lst/user/update-password`, {
    user: credentials
  })
}

const getUpdatedEmail = token => {
  return axios
    .post(`https://api.bblk.ga/lst/user/get-updated-email`, {token})
    .then(response => response.data)
}

const isLoggedIn = token => {
  return axios.post('https://api.bblk.ga/lst/user', {token})
}

const sendNewPassword = credentials => {
  return axios.post('https://mail.bblk.ga/lst/request-password', {
    user: credentials
  })
}

const logout = token => {
  return axios.post('https://api.bblk.ga/lst/logout', {token})
}

export default {
  login,
  logout,
  requestPassword,
  sendNewPassword,
  getUpdatedEmail,
  updatePassword,
  isLoggedIn
}
