import React from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaBookOpen } from 'react-icons/fa'
import { GrServices } from 'react-icons/gr'
import { AiFillMessage } from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
  const [ activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBookOpen/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrServices/></a>
      <a href='#contacts' onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav
