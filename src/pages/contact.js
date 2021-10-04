import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              I'm baby gastropub subway tile bespoke dolor williamsburg anim
              selfies cred dolore intelligentsia roof party YOLO hell of irony.
              Minim typewriter narwhal letterpress, single-origin coffee hammock
              meh cloud bread eu vegan forage aute try-hard ipsum.
            </p>
            <p>
              Irony food truck et cronut laboris pok pok beard, waistcoat eu
              aliqua.
            </p>
            <p>
              Synth kogi letterpress church-key activated charcoal man bun
              typewriter fugiat mollit. Ut DIY prism stumptown irony. Gastropub
              tbh distillery non. Photo booth tacos craft beer, cornhole
              aesthetic cold-pressed nulla glossier. Art party iPhone
              vexillologist, pickled scenester selfies next level marfa tote bag
              velit taxidermy readymade slow-carb adaptogen cupidatat.
            </p>
          </article>
          <article>
            <form
              action=""
              className="form contact-form"
              action="https://formspree.io/f/mleavwbn"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at these awesome recipes!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

export default Contact
