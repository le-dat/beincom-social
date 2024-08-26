import axios, { AxiosResponse } from 'axios'

import { TokenStorage } from '@/utils/local-storage'

let isRefreshing = false
let failedQueue: any[] = []

const baseURL: string = String(process.env.NEXT_PUBLIC_API_ENDPOINT)

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error)
    } else {
      resolve(token)
    }
  })

  failedQueue = []
}

const axiosClient = axios.create({
  baseURL: baseURL,
})

// Request Interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = TokenStorage.getAccessToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response Interceptor
axiosClient.interceptors.response.use(
  (response) => handleResponse(response),
  (error) => handleErrorResponse(error)
)

const handleErrorResponse = async (error: any) => {
  const originalRequest = error.config
  const isAuthError = [400, 401, 403].includes(error?.response?.status)

  if (isAuthError && !originalRequest._retry) {
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject })
      })
        .then((token) => {
          originalRequest.headers['Authorization'] = `Bearer ${token}`
          return axiosClient(originalRequest)
        })
        .catch((err) => Promise.reject(err))
    }

    originalRequest._retry = true
    isRefreshing = true

    const refreshToken = TokenStorage.getRefreshToken()
    try {
      const { data } = await axios.post(`${baseURL}/auth/refresh-token`, { refresh_token: refreshToken })
      const _accessToken = data?.data?.access_token
      const _refreshToken = data?.data?.refresh_token

      TokenStorage.setToken(_accessToken)
      TokenStorage.setRefreshToken(_refreshToken)

      axios.defaults.headers.common['Authorization'] = `Bearer ${_accessToken}`
      originalRequest.headers['Authorization'] = `Bearer ${_accessToken}`
      processQueue(null, _accessToken)

      return axiosClient(originalRequest)
    } catch (err) {
      processQueue(err, null)
      TokenStorage.clearToken() // Clear local storage if refresh token request fails
      return Promise.reject(err)
    } finally {
      isRefreshing = false
    }
  }

  return handleError(error)
}

const handleResponse = (response: AxiosResponse<any>) => response

const handleError = (error: any) => {
  const { data } = error.response
  console.error({ error })
  return data
}

export default axiosClient
