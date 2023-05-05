import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='h-screen grid gap-4 place-content-center bg-slate-500 text-white'>
      <h1 className='text-7xl font-medium uppercase tracking-widest'>
        Welcome
      </h1>
      <Link
        to='/login'
        className='justify-self-center bg-slate-700 px-4 py-3 rounded uppercase font-medium tracking-widest hover:bg-slate-800 transition'
      >
        Login
      </Link>
    </div>
  )
}

export default Welcome
