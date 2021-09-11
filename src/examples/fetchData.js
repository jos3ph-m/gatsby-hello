import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
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

const fetchData = () => {
  const data
  return (
    <div>
      <h1>Hello from fetchData</h1>
    </div>
  )
}

export default fetchData
