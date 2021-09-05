import React from 'react'
import {Link} from 'gatsby'
import { FiAlignJustify } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav>
      <FiAlignJustify />
      <ul>
        <li>
        <Link to="/">home</Link>
        </li>
        <li>
        <Link to="/about">about</Link>
        </li>
        <li>
        <Link to="/contact">contact</Link>
        </li>
        <li>
        <Link to="/tags">tags</Link>
        </li>
        <li>
        <Link to="/recipes">recipes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
