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
        to={'Calendar'}
      />
      <SideBarIcon
        icon={<AiFillClockCircle size='28' />}
        text='Stopwatch/Timer'
        to={'Timer'}
      />
      <SideBarIcon
        icon={<BsCardChecklist size='28' />}
        text='Reminders'
        to={'Reminders'}
      />
      <SideBarIcon
        icon={<MdDashboard size='28' />}
        text='Board'
        to={'Board'}
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


