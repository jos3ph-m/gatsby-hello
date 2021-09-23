import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return <div className="tag-container">this is tagslist</div>
}

export default TagsList
