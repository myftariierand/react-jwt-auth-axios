import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

import useRefreshToken from '../hooks/useRefreshToken'

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true)

  const { token } = useAuth()

  const refresh = useRefreshToken()

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    !token ? verifyRefreshToken() : setIsLoading(false)
  }, [])

  return isLoading ? (
    <div className='h-screen grid place-content-center bg-slate-700 text-white'>
      <h1 className='text-6xl uppercase font-medium tracking-widest'>
        Loading...
      </h1>
    </div>
  ) : (
    <Outlet />
  )
}

export default PersistLogin
