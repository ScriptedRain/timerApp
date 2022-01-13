import React from 'react'
import Profile from '../Components/Profile'
import { useAuth } from '../Contexts/UserContext'
import { Button2 } from '../Components/Button'
const Settings = () => {
  const { logout } = useAuth()

  return (
    <div className='pattern'>
      <Profile />
      <Button2
        name={'logout'}
        onClick={async (e) => {
          e.preventDefault()
          logout()
        }}
      />
    </div>
  )
}

export default Settings
