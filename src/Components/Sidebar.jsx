import React from 'react'
import {
  AiFillHome,
  AiOutlineTeam,
  AiFillCalendar,
  AiFillClockCircle,
  // AiOutlineRadiusSetting,
} from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import {MdDashboard} from 'react-icons/md'
import {BsCardChecklist} from 'react-icons/bs'
const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-md'>
      <SideBarIcon 
      icon={<AiFillHome 
      size='28' />} 
      text='Home' to={'/'} />
      <SideBarIcon
        icon={<AiFillCalendar size='28' />}
        text='Calendar'
        to={'Calendar (Coming Soon)'}
      />
      <SideBarIcon
        icon={<AiFillClockCircle size='28' />}
        text='Stopwatch/Timer'
        to={'Timer (Coming Soon)'}
      />
      <SideBarIcon
        icon={<BsCardChecklist size='28' />}
        text='ToDo'
        to={'ToDo'}
      />
      <SideBarIcon
        icon={<MdDashboard size='28' />}
        text='Board'
        to={'Board (Coming Soon)'}
      />
      <SideBarIcon
        icon={<AiOutlineTeam size='28' />}
        text='About Us'
        to={'/About'}
      />
      <SideBarIcon
        icon={<FiSettings size='28' top='90'/>}
        text='Settings'
        to={'Settings'}
      />
      <SideBarIcon
        icon={<FiSettings size='28' top='90'/>}
        text='Sign Up'
        to={'SignUp'}
      />
    </div>
  )
}


const SideBarIcon = ({ icon, text = 'tooltip 💡', to }) => {
  return (
    <div className='sidebar-icon group'>
      <a href={to}>{icon}</a>

      <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </div>
  )
}

export default Sidebar


