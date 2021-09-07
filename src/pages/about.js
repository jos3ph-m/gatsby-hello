import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'


const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm a baby coloring book baby</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cum neque distinctio quo nemo nisi!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to="/contact" className="btn">contact</Link>
          </article>
        </section>
      </main>
    </Layout>
  )
}


export default About
