import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  setupTags(recipes)
  return <div>this is tagslist</div>
}

export default TagsList
