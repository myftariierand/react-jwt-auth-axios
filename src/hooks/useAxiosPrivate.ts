import { useEffect } from 'react'

import useAuth from './useAuth'
import useRefreshToken from './useRefreshToken'
import { clientPrivate } from '../api/axios'

const useAxiosPrivate = () => {
  const { token } = useAuth()
  const refresh = useRefreshToken()

  useEffect(() => {
    const requestIntercept = clientPrivate.interceptors.request.use(
      config => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      error => Promise.reject(error)
    )

    const responseIntercept = clientPrivate.interceptors.response.use(
      response => response,
      async error => {
        const prevRequest = error?.config
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true
          const newAccessToken = await refresh()
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
          return clientPrivate(prevRequest)
        }
        return Promise.reject(error)
      }
    )

    return () => {
      clientPrivate.interceptors.request.eject(requestIntercept)
      clientPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [token, refresh])

  return clientPrivate
}

export default useAxiosPrivate
