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
  return axios.post('https://api.bblk.ga/lst/user/update-password/:token', {
    user: credentials
  })
}

const getUpdatedEmail = token => {
  return axios
    .post(`https://api.bblk.ga/lst/user/get-updated-email/${token}`)
    .then(response => response.data)
}

const sendNewPassword = credentials => {
  return axios.post('https://mail.bblk.ga/lst/request-password', {
    user: credentials
  })
}

export default {
  login,
  requestPassword,
  sendNewPassword,
  getUpdatedEmail,
  updatePassword
}
