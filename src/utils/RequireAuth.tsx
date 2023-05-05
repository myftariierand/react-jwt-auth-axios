import { Outlet, Navigate, useLocation } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

const RequireAuth = () => {
  const { token } = useAuth()
  const location = useLocation()

  return token ? (
    <Outlet />
  ) : (
    <Navigate replace to='/login' state={{ from: location }} />
  )
}

export default RequireAuth
