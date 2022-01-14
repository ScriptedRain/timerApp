import React from 'react'

const Pattern = ({ children }) => {
  return (
    <header className='bg-gray-900 pattern'>
      <div className='container px-6 mx-auto'>
        <div className='flex items-center py-6 h-screen flex-row'>
          {children}
        </div>
      </div>
    </header>
  )
}

export default Pattern
