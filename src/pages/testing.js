import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"

const Testing = ({ data }) => {
  return (
    <Layout>
      <Gallery />
    </Layout>
  )
}

export default Testing
