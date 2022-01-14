import { createContext, useContext, useState, useEffect } from 'react'
const firestoreContext = createContext({
  createUserInDb,
})

export const useFirestore = () => useContext(firestoreContext)

export default async function firestoreContext({ children }) {
  const createUserInDb = (db, collectionRef, id, name) => {
    return await setDoc(doc(db, collectionRef, id), {
      name: name,
    })
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
