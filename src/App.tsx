import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'

import PersistLogin from './utils/PersistLogin'
import RequireAuth from './utils/RequireAuth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path='login' element={<Login />} />
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route element={<Layout />}>
              <Route path='dashboard' element={<Dashboard />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
