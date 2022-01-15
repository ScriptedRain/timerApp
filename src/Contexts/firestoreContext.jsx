import { createContext, useContext, useState, useEffect } from 'react'
import { doc, setDoc } from 'firebase/firestore'

const FirestoreContext = createContext({
  createUserInDb: () => Promise,
})

export const useFirestore = () => useContext(FirestoreContext)

export default function FirestoreContextProvider({ children }) {
  // const createUserInDb = (db, collectionRef, id, name) => {
  //   return setDoc(doc(db, collectionRef, id), {
  //     name: name,
  //   })
  // }

  function createUserInDb(db, collectionRef, id, name) {
    return setDoc(doc(db, collectionRef, id), {
      name: name,
    })
  }

  const value = {
    createUserInDb,
  }
  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  )
}
