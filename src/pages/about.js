import React from 'react'
import Layout from '../components/Layout'
import * as aboutStyles from '../examples/about.module.css'
import styled from 'styled-components';

const about = () => {
  return (
    <Layout>
      <Wrapper>
      <h1>about page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, earum.</p>
      </Wrapper>
      
    </Layout>
  )
}

const Wrapper = styled.section`

  color: pink;


h1 {
  color: yellowgreen;
}

.text{
  text-transform: uppercase;
}
`

export default about
