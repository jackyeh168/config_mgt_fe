import axios from 'axios'
import config from '@/config'

let instance = axios.create({
  baseURL: config.VUE_APP_BASE_API,
  timeout: 5000
})

// module.exports = instance
export default instance
