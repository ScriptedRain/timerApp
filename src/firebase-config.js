import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react'
import { getFirestore } from 'firebase/firestore'
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

export const db = getFirestore(app)
