import { createContext, useContext, useState, useEffect } from 'react'
const firestoreContext = createContext({
  createUserInDb,
})

export const useFirestore = () => useContext(firestoreContext)

export default function firestoreContext({ children }) {
  const createUserInDb = (collectionRef, id, name) => {
    await addDoc(collectionRef, { name: name })
  }

  const value = {
    createUserInDb,
  }
  return (
    <firestoreContext.Provider value={value}>
      {children}
    </firestoreContext.Provider>
  )
}
