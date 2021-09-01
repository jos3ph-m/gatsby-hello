import React from 'react'
import Layout from '../components/Layout'
import { page, text } from '../examples/about.module.css'

const about = () => {
  return (
    <Layout>
      <div className="about-heading">
      <h1>about page</h1>
      <p className={text}></p>
      </div>
      
    </Layout>
  )
}

export default about
