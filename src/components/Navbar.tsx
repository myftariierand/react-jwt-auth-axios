import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import useAuth from '../hooks/useAuth'
import { logout } from '../api/axios'

const Navbar = () => {
  const navigate = useNavigate()
  const { token } = useAuth()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div className='bg-slate-700 text-white'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <h1 className='text-3xl font-medium tracking-widest'>
          {jwtDecode(token).username}
        </h1>
        <button
          onClick={handleLogout}
          className='bg-slate-500 px-6 py-2 rounded uppercase'
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Navbar
