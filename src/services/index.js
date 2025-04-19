import axios from 'axios'
import router from '../router'
import AuthService from './auth'
import UserService from './users'
import { setGlobalLoading } from '@/store/global'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})

httpClient.interceptors.request.use(config => {
  setGlobalLoading(true)
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, (error) => {
  setGlobalLoading(false)
  return Promise.reject(error)
})

httpClient.interceptors.response.use((response) => {
  setGlobalLoading(false)
  return response
}, (error) => {
  setGlobalLoading(false)

  const status = error?.response?.status

  if (status === 0 || status === 500) {
    throw new Error(error.message)
  }

  if (status === 401) {
    router.push({ name: 'Home' })
  }

  return Promise.reject(error)
})

export default {
  auth: AuthService(httpClient),
  users: UserService(httpClient)
}
