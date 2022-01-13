import { createContext, useContext, useState } from 'react'
import { auth } from '../firebase-config'

export const UserContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const value = {
    currentUser,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
