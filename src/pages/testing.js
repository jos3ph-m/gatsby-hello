import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Testing = ({ data }) => {
  return (
    <div>
      <h2>author: </h2>
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
