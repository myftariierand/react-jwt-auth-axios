import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='h-screen grid grid-rows-[auto_1fr]'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
