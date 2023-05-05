import axios from 'axios'

import { LoginData } from '../interfaces/types'

export const client = axios.create({
  baseURL: 'http://localhost:4000',
})

export const clientPrivate = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

export const login = ({ username, password }: LoginData) =>
  client.post(
    '/auth/login',
    { username, password },
    {
      withCredentials: true,
    }
  )

export const logout = () =>
  client.post('/auth/logout', {}, { withCredentials: true })
