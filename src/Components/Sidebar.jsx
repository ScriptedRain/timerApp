import React from 'react'
import { AiFillHome, AiOutlineTeam, AiFillCalendar, AiFillClockCircle, AiOutlineRadiusSetting } from 'react-icons/ai'
import { FiSettings} from 'react-icons/fi'
const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-md'>
      <SideBarIcon icon={<AiFillHome size='28' />} text='Home' to={'/'} />
      <SideBarIcon icon={<AiFillCalendar size='28' />} text='Calendar' />
      <SideBarIcon icon={<AiFillClockCircle size='28' />} text='Stopwatch/Timer' />
      <SideBarIcon
        icon={<AiOutlineTeam size='28' />}
        text='About Us'
        to={'/about'}
      />
      <SideBarIcon icon={<FiSettings size='28' />} text='Settings' to={'/'} />
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
