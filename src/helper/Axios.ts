import axios from 'axios'
import eventEmitter from './Event'
axios.interceptors.request.use(
  (config) => {
    eventEmitter.emit('SHOW_LOADER')
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  (response) => {
    eventEmitter.emit('HIDE_LOADER')
    return response
  },
  (error) => {
    eventEmitter.emit('HIDE_LOADER')
    return Promise.reject(error)
  }
)
export default axios
