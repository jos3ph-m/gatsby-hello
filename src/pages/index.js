import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage src="../assets/images/main.jpeg" />
        </header>
      </main>
    </Layout>
  )
}
