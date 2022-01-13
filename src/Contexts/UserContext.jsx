import { createContext, useContext, useState } from 'react'
import { auth } from '../firebase-config'

export const UserContext = createContext({
  currentUser: null,
})

export const useUser = () => useContext(UserContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const value = {
    currentUser,
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
