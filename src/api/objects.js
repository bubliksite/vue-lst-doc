import axios from './axios'

const getObjects = () => {
  return axios.get('/objects/groups/all')
}

export default {getObjects}
