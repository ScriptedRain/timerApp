import React from 'react'
import { useRef, useState } from 'react'

import { FcGoogle } from 'react-icons/fc'
import { auth as Authenticate } from '../firebase-config'
import { signup, login, logout, useAuth } from '../firebase-config'

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const Register = () => {
  // const [user, setUser] = useState(null)
  // const [signedIn, setSignIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const currentUser = useAuth()
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()

    return signInWithPopup(Authenticate, provider)

    // signInWithPopup(Authenticate, provider)
    //   .catch((err) => {
    //     'null'
    //   })
    //   .then(setUser)

    // console.log(user)
    // // console.log(user.result.user.displayName)
    // setSignIn(true)
  }

  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSignup() {
    setLoading(true)

    try {
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert('Error!')
    }
    setLoading(false)
  }

  async function handleLogin() {
    setLoading(true)

    try {
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert('Error!')
    }
    setLoading(false)
  }

  async function handleLogout() {
    setLoading(false)
    try {
      await logout()
    } catch {
      alert('Error!')
    }
  }

  return (
    <div className='flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0'>
      <div className='max-w-sm bg-white rounded-lg dark:bg-gray-800'>
        <div className='p-5 text-center'>
          <h2 className='text-2xl font-semibold text-gray-700 dark:text-white fo'>
            Sign Up
          </h2>

          <form action='#'>
            <div className='mt-4'>
              <input
                className='block w-full px-4 py-2 text-white placeholder-gray-500 border rounded-md bg-gray-800 border-gray-600  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                type='email'
                placeholder='Email address'
                aria-label='Email address'
                ref={emailRef}
              ></input>
              <input
                className='block w-full px-4 py-2 mt-4 text-white placeholder-gray-500  border rounded-md bg-gray-800 border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                type='password'
                placeholder='Password'
                aria-label='Password'
                ref={passwordRef}
              ></input>
            </div>
            <div className='flex space-x-2 my-2 '>
              <button disabled={loading || currentUser != null} onClick={signInWithGoogle} className={' disabled:opacity-50 disabled:cursor-not-allowed py-2 px-4 rounded inline-flex items-center font-medium tracking-wide text-white capitalize transition duration-200 transform bg-gray-900 hover:bg-gray-700 focus:ring-indigo-300 focus:ring-opacity-80 ease-in-out hover:scale-110 '}>
                 <FcGoogle className='w-full h-5 ' />
                
              
                
              </button>
            </div>

            <div className='flex items-center justify-between mt-4'>
              <a
                href='/'
                className='text-sm text-gray-600 dark:text-gray-200 hover:underline'
              >
                Forget Password?
              </a>

              <button
                disabled={loading || currentUser != null}
                onClick={handleSignup}
                className=' disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 ml-2 font-semibold text-white transition-cxolors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'
              >
                Sign up
              </button>

              <button
                disabled={loading || currentUser}
                onClick={handleLogin}
                className=' disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 ml-2 font-semibold text-white transition-cxolors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'
              >
                Log In
              </button>
            </div>
            <div className='flex items-center mt-1'>
              <button
                disabled={loading || !currentUser}
                onClick={handleLogout}
                className=' disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 font-semibold text-white transition-cxolors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'
              >
                Log out
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
