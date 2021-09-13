/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simple Recipes",
    description: "Nice and clean recipes site",
    author: "@jos3ph_m",
    person: { name: "joey", age: 35 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "audrey", age: 31 },
      { name: "ritmin", age: 14 },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/assets/css`,
      },
    },
  ],
}
