import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`

const Gallery = () => {
  return (
    <div>
      <h2>simple image gallery</h2>
    </div>
  )
}

export default Gallery
