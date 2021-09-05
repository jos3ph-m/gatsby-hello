import React from 'react'
import {Link} from 'gatsby'
import { FiAlignJustify } from 'react-icons/fi'
import logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simple recipes" />
          </Link>
        </div>
        <div className="nav-links show-links"></div>
      </div>
      
    </nav>
  )
}

export default Navbar
