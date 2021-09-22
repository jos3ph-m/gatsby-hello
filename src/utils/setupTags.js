const setupTags = recipes => {
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      console.log(tag)
    })
  })

  return recipes
}

export default setupTags
