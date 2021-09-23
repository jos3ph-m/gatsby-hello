import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          return
        })}
      </div>
    </div>
  )
}

export default TagsList
