module.exports = {
  siteMetadata: {
    title: `Produits Boréales Nord-Côtiers`,
    description: `Produits boréales dans la famille des petits fruits, des thés et des épices`,
    author: `Les Saveurs Boréales`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Les Saveurs Boreales`,
        short_name: `Saveurs Boreales`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/lsb-logo.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138694416-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
