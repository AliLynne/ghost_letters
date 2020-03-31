/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-axe`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `http://localhost:2368`,
        contentApiKey: `321d70a32e55e17828f708ce0b`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Cutive Mono`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Letters to the Future`,
        short_name: `Letters`,
        start_usl: `/`,
        display: `standalone`,
        icon: `src/images/typwriter.png`,
      },
    },
  ],
}
