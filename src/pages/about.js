import React from 'react'
import Layout from '../components/Layout'
import * as aboutStyles from '../examples/about.module.css'
import styled from 'styled-components';

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

const Wrapper = styled.section`
.page {
  color: pink;
}

.page h1 {
  color: yellowgreen;
}

.text{
  text-transform: uppercase;
}
`

export default about
