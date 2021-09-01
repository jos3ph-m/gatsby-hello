import React from 'react'
import Layout from '../components/Layout'
import * as aboutStyles from '../examples/about.module.css'

const about = () => {
  return (
    <Layout>
      <div className={aboutStyles.page}>
      <h1>about page</h1>
      <p className={aboutStyles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, earum.</p>
      </div>
      
    </Layout>
  )
}

export default about
