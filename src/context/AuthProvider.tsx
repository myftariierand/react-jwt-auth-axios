import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

interface Props {
  children: ReactNode
}

type ContextTypes = {
  token: string | null
  setToken: Dispatch<SetStateAction<null>>
}

const AuthContext = createContext<ContextTypes>({
  token: null,
  setToken: () => {},
})

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState(null)

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
