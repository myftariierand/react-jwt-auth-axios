import { client } from '../api/axios'

import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setToken } = useAuth()

  const refresh = async () => {
    const res = await client.get('/auth/refresh', {
      withCredentials: true,
    })

    setToken(res.data.accessToken)

    return res.data.accessToken
  }

  return refresh
}

export default useRefreshToken
