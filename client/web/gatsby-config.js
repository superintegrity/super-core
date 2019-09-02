module.exports = {
  siteMetadata: {
    title: `Super Integrity`,
    description: `Super Integrity`,
    author: `Jie Zhou`,
    mapApiKey: `AIzaSyAVZcp3tZikbfWLKqysbMv2jeHfRogn7dw`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'about-images',
        path: `${__dirname}/src/pages/about/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `super-integrity`,
        short_name: `super`,
        start_url: `/`,
        background_color: `#a69576`,
        theme_color: `#a69576`,
        display: `minimal-ui`,
        icon: `src/images/super-integrity.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Libre Baskerville'],
        },
      },
    },
  ],
}
