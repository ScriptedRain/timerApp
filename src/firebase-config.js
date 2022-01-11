import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useState, useEffect } from 'react'

const firebaseConfig = {
  apiKey: 'AIzaSyDBQw6o7LYHX6O6rfTp7Ms_3huVLgv2Tgk',
  authDomain: 'timer-app-9c40c.firebaseapp.com',
  projectId: 'timer-app-9c40c',
  storageBucket: 'timer-app-9c40c.appspot.com',
  messagingSenderId: '349215532883',
  appId: '1:349215532883:web:b8d88c8ac93b892e0ca3a6',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
  return signOut(auth)
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unsub
  }, [])

  return currentUser
}
