import React from 'react'
import { useState } from 'react'

import { AiOutlineGoogle } from 'react-icons/ai'
import { useAuth } from '../Contexts/UserContext'


const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { currentUser, register, login } = useAuth()

  const { signInWithGoogle } = useAuth()
  const { logout } = useAuth()

  return (
    <div className='flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0'>
      <div className='max-w-sm rounded-lg bg-gray-800'>
        <div className='p-5 text-center'>
        <h2 className='text-2xl font-semibold text-white fo'>
            Sign Up / Log In
          </h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault()

              register(email, password)
                .then((res) => console.log(res))
                .catch((err) => console.log(err.message))
            }}
          >
            <div className='mt-4'>
              <input
                className='block w-full px-4 py-2 text-white placeholder-gray-500 border rounded-md bg-gray-800 border-gray-600  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email address'
                aria-label='Email address'
              ></input>
              <input
                className='block w-full px-4 py-2 mt-4 text-white placeholder-gray-500  border rounded-md bg-gray-800 border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                aria-label='Password'
              ></input>
            </div>
            <div className='flex items-center justify-between mt-4'>
              <button disabled={currentUser != null} className='w-full disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 font-semibold text-white transition-cxolors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'>
                Sign up
              </button>
            </div>
            <div className='flex items-center mt-1'>
              <button onClick={async (e) => {
                  e.preventDefault()
                  logout()}} 
                className=' disabled:opacity-50 disabled:cursor-not-allowed w-full px-4 py-2 mt-2 font-semibold text-white transition-cxolors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'>
                Log out
              </button>
            </div>
            <div class="flex my-4 items-center text-center">
                <hr class="border-gray-300 border-1 w-full rounded-md"/>
                <label class="block font-medium text-sm text-white w-full">
                    OR
                </label>
                <hr class="border-gray-300 border-1 w-full rounded-md"/>
            </div>
            
            <div className='flex space-x-2 my-2 '>
              <button
                onClick={() => signInWithGoogle()}
                className={
                  ' disabled:opacity-50 disabled:cursor-not-allowed w-full inline-flex py-2 px-4 rounded items-center font-medium text-white capitalize transition duration-200 transform bg-red-700 hover:bg-red-900 focus:ring-indigo-300 focus:ring-opacity-80 '
                }
              >
                <AiOutlineGoogle className=' h-5 ' />
                <div className='ml-2'>Sign in with google</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
