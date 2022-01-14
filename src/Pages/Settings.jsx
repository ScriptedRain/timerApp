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

const Settings = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState([])
  const collectionRef = collection(db, 'users')
  const { currentUser } = useAuth()

  const createUser = async () => {
    // await addDoc(collectionRef, { name: name })
    await setDoc(doc(db, 'users', currentUser.uid), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    })
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
          type='text'
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <button onClick={createUser}>create</button>
      </div>
    </div>
  )
}

export default Settings
