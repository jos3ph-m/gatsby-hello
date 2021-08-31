import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'

export default function Home() {
  return (
  <Layout>

    <h1 style={{color: "green", textTransform: "capitalize"}}>    
      Home page</h1>
      <div>
    <Link to="/about">About</Link>
    </div>
      <div>
    <Link to="/company/history">History</Link>
    </div>
  </Layout>
  )
}
