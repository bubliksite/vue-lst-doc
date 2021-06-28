import axios from './axios'

const getObjects = () => {
  return axios.get('https://api.bblk.ga/lst/objects/groups')
}

export default {getObjects}
