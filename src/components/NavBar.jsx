import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../assets/shared/logo.svg'
import menu from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'


const NavBar = () => {
  
  const [toggle, setToggle] = useState(false)
  const [tabNav, setNav] = useState(1)
  const toggleTabNav = (index) => {
     setNav(index)
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo'/>
      <button className="toggle">
        <img 
        src={toggle ? close : menu} 
        alt="menu"
        onClick={() => setToggle(!toggle)}
        />
        </button>
      <ul className={`${!toggle ? "" : "mobile-true"} underline-indicators navbar-list `}>
        <li className={tabNav === 1 ? 'active navbar-item' : 'navbar-item'} 
          onClick={() => toggleTabNav(1)}>
          <a href="/home"><span className='number'>00</span>HOME</a>
        </li>
        <li className={tabNav === 2 ? 'active navbar-item' : 'navbar-item'} 
          onClick={() => toggleTabNav(2)}>
          <a href="/destination"><span className='number'>01</span>DESTINATION</a>
        </li>
        <li className={tabNav === 3 ? 'active navbar-item' : 'navbar-item'} 
          onClick={() => toggleTabNav(3)}>
          <a href="/crew"><span className='number'>02</span>CREW</a>
        </li>
        <li className={tabNav === 4 ? 'active navbar-item' : 'navbar-item'} 
          onClick={() => toggleTabNav(4)}>
          <a href="/technology"><span className='number'>03</span>TECHNOLOGY</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar