import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const TagTemplate = props => {
  return (
    <div>
      <h2>tag template page</h2>
    </div>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      filter: { content: { tags: { eq: $tag } } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
