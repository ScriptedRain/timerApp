import React from 'react'
import { Button2 } from './Button'
import { FcGoogle } from 'react-icons/fc'
import Register from './Register'
import { useAuth } from '../firebase-config'
const Hero = () => {
  const currentUser = useAuth()

  return (
    <div>
      <header class='bg-gray-900 pattern'>
        <div class='container px-6 mx-auto'>
          <div class='flex flex-col items-center py-6 lg:h-screen lg:flex-row'>
            <div class='lg:w-1/2'>
              <h2 class='text-4xl font-semibold text-gray-100'>Dynamik</h2>

              <h3 class='text-2xl font-semibold text-gray-100'>
                Hello there,{' '}
                <span class='text-blue-400'>
                  {currentUser ? currentUser?.email : 'Guest'}
                </span>
              </h3>

              <p class='mt-3 text-gray-100'>
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
