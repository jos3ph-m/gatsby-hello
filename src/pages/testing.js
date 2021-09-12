import React from "react"
import { graphql } from "gatsby"

const Testing = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h2>testing</h2>
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
