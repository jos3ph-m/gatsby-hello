import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"

const AllRecipes = () => {
  return (
    <div>
      <h4>all recipes</h4>
      <TagsList />
      <RecipesList />
    </div>
  )
}

export default AllRecipes
