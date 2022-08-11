/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Everyday Recipes",
    description: "Simple recipes for everyday cooking",
    author: "Julissa Gazca",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
