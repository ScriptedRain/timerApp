import { Button } from './Button'
import Dropdown from './Dropdown'
import Profile from './Profile'

const Navbar = () => {
  return (
    <nav className='bg-white shadow sticky dark:bg-gray-800 top-0 opacity-75 bg-clip-padding blur-bg'>
      <div className='container px-6 py-4 mx-auto'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex items-center justify-between'>
            <div className='text-xl font-semibold text-gray-700'>
              <a
                className='text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
                href='/'
              >
                Brand
              </a>
            </div>

            <div className='flex md:hidden'>
              <button
                type='button'
                className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                aria-label='toggle menu'
              >
                <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                  <path
                    fill-rule='evenodd'
                    d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className='flex-1 md:flex md:items-center md:justify-between'>
            <div className='flex flex-col-mx-4 space-x-4 md:flex-row md:items-center md:mx-8'>
              <a href='/about'>
                <Button name='About us' />
              </a>
              <a href='/about'>
                <Button name='App' />
              </a>
            </div>

            <div className='flex items-center mt-4 md:mt-0'>
              <Dropdown e={Profile} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
