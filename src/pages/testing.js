import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Testing = ({ data }) => {
  const author = data.site.info.author
  return (
    <div>
      <h2>author: {author}</h2>
    </div>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`
export default Testing
