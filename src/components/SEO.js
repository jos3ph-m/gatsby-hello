import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  return <Helmet title={title} meta={[{}]}></Helmet>
}

export default SEO
