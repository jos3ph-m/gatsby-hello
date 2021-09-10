import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <h1>{data.site.siteMetadata.description}</h1>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <h4>{data.site.siteMetadata.complexData[0].name}</h4>
      <h4>
        {data.site.siteMetadata.complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name} is {item.age} years old...
            </p>
          )
        })}
      </h4>
    </div>
  )
}

export default ComponentName
