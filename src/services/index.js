import axios from 'axios'
import router from '../router'
import { setGlobalLoading } from '../store/global'
import AuthService from './auth'
import UsersService from './users'
import FeedbacksService from './feedbacks'

const API_ENVS = {
  production: 'https://backend-treinamento-vue3.vercel.app',
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
})

httpClient.interceptors.response.use((response) => {
  setGlobalLoading(false)
  return response
}, (error) => {
  setGlobalLoading(false)

  const requestStatus = error.request?.status
  const responseStatus = error.response?.status
  const canThrowAnError = requestStatus === 0 || requestStatus === 500
  if (canThrowAnError) {
    throw new Error(error.message)
  }

  if (responseStatus === 401) {
    router.push({ name: 'Home' })
  }
  const customError = new Error(error.message)
  customError.status = responseStatus ?? null

  return Promise.reject(customError)
}
)

export default {
  auth: AuthService(httpClient),
  users: UsersService(httpClient),
  feedbacks: FeedbacksService(httpClient)
}
