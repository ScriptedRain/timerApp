import React from 'react'
import Register from './Register'
import { useAuth } from '../firebase-config'
const Hero = () => {
  const currentUser = useAuth()

  return (
    <div>
      <header className='bg-gray-900 pattern'>
        <div className='container px-6 mx-auto'>
          <div className='flex flex-col items-center py-6 lg:h-screen lg:flex-row'>
            <div className='lg:w-1/2'>
              <h2 className='text-4xl font-semibold text-gray-100'>Dynamik</h2>

              <h3 className='text-2xl font-semibold text-gray-100'>
                Hello there{' '}
                <span className='text-blue-400'>
                  {currentUser ? currentUser?.email : 'Guest'}
                </span>
              </h3>

              <p className='mt-3 text-gray-100'>
                Welcome to the ultimate productivity app, the only app you will
                ever need to stay productive. Now you don't have to have
                seperate apps for a calendar, timer and tasks to manage.
              </p>
            </div>

            <Register />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Hero
