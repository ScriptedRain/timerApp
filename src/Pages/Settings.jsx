import React, { useState, useEffect } from 'react'
import Profile from '../Components/Profile'
import { db } from '../firebase-config'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
} from 'firebase/firestore'
import { useAuth } from '../Contexts/UserContext'
import { useFirestore } from '../Contexts/firestoreContext'

const Settings = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState([])
  const collectionRef = collection(db, 'users')

  const { currentUser } = useAuth()
  const { createUserInDb } = useFirestore()
  const createUser = () => {
    createUserInDb(db, 'users', currentUser.uid, name)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers()
  }, [users])
  return (
    <div className='pattern'>
      <Profile />
      <div className='ml-56'>
        {users.map((user) => {
          return (
            <div>
              <h1 className='text-center'>
                name: {user.name}{' '}
                <button
                  onClick={() => {
                    deleteUser(user.id)
                  }}
                >
                  delete
                </button>
              </h1>
            </div>
          )
        })}
        <input
          className=' bg-gray-700 border-4 border-solid rounded px-2 '
          type='text'
          placeholder='type...'
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <button className=' bg-gray-700 rounded' onClick={createUser}>
          create
        </button>
      </div>
    </div>
  )
}

export default Settings
