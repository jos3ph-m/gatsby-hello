import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql``

const fetchData = () => {
  return (
    <div>
      <h1>Hello from fetchData</h1>
    </div>
  )
}

export default fetchData
