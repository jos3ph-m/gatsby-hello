import React from "react"
import {Link} from 'gatsby'

export default function Home() {
  return (
  <div>

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
