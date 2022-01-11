import React from 'react'
import { useRef, useState } from 'react'

import { Button2 } from './Button'
import { FcGoogle } from 'react-icons/fc'
import { auth as Authenticate } from '../firebase-config'
import { signup } from '../firebase-config'

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'


const Register = () => {
  const [user, setUser] = useState(null)
  const [signedIn, setSignIn] = useState(false)
  const[loading, setLoading] = useState(false)
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
      alert("Error!")
    }
    setLoading(false)
    
  }

  return (
    <div class='flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0'>
      <div class='max-w-sm bg-white rounded-lg dark:bg-gray-800'>
        <div class='p-5 text-center'>
          <h2 class='text-2xl font-semibold text-gray-700 dark:text-white fo'>
            Sign Up
          </h2>

          <form action='#'>
            <div class='mt-4'>
              <input
                class='block w-full px-4 py-2 text-white placeholder-gray-500 border rounded-md bg-gray-800 border-gray-600  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                type='email'
                placeholder='Email address'
                aria-label='Email address'
                ref={emailRef}
              ></input>
              <input
                class='block w-full px-4 py-2 mt-4 text-white placeholder-gray-500  border rounded-md bg-gray-800 border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                type='password'
                placeholder='Password'
                aria-label='Password'
                ref={passwordRef}
              ></input>
            </div>
            <div className='flex space-x-2 my-2 '>
              <Button2
                name={<FcGoogle className='w-full h-5 ' />}
                className={
                  'transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                }
                onClick={signInWithGoogle}
              />
            </div>

            <div class='flex items-center justify-between mt-4'>
              <a
                href='#'
                class='text-sm text-gray-600 dark:text-gray-200 hover:underline'
              >
                Forget Password?
              </a>

              <button disabled={loading} onClick={handleSignup}  className=' disabled:opacity-50 px-4 py-2 font-semibold text-white transition-cxolors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
