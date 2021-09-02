import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import { page, text } from '../examples/home.module.css'
import { ExampleButton } from '../examples/button'

export default function Home() {
  return (
  <Layout>
    <div className={page}>
    <h1>Home page</h1>
    <h1>Hello page</h1>
    <h1>Home hello</h1>
    <p className={text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam illo sint laudantium ipsum. Dolores beatae, assumenda, perspiciatis aliquid corrupti, cum et necessitatibus expedita esse repudiandae voluptas. Provident illum nulla ducimus. Quisquam nisi assumenda beatae vero amet ipsa aspernatur laudantium deleniti autem saepe! Corporis cupiditate sint veniam dolores officiis hic vero!</p>
    </div>
   
  </Layout>
  )
}
