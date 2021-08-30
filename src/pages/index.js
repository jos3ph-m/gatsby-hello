import React from "react"
import {Link} from 'gatsby'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
  <div>
    <nav>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </nav>
    <h1>    
      hello people</h1>
      <div>
    <Link to="/about">About</Link>
    </div>
      <div>
    <Link to="/company/history">History</Link>
    </div>
  </div>
  )
}
