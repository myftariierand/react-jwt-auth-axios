import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { LoginData } from '../interfaces/types'
import { login } from '../api/axios'

import useAuth from '../hooks/useAuth'

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
})

const Login = () => {
  const navigate = useNavigate()

  const { setToken } = useAuth()

  const { register, handleSubmit } = useForm<LoginData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: LoginData) => {
    try {
      const res = await login(data)
      setToken(res.data.accessToken)
      navigate('/dashboard')
    } catch (error) {}
  }

  return (
    <div className='h-screen grid gap-4 bg-slate-500 text-white'>
      <div className='border border-white p-10 rounded-md w-full max-w-sm place-self-center'>
        <h1 className='uppercase font-medium tracking-widest text-2xl mb-8 text-center'>
          Login
        </h1>
        <form
          className='grid gap-4'
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='grid gap-2'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              className='rounded outline-none py-2 px-4 text-slate-700'
              {...register('username')}
            />
          </div>
          <div className='grid gap-2'>
            <label htmlFor='username'>Password</label>
            <input
              type='password'
              id='password'
              className='rounded outline-none py-2 px-4 text-slate-700'
              {...register('password')}
            />
          </div>
          <button className='bg-slate-700 rounded py-2'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
