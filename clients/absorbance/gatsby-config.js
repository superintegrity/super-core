const { loadEnv } = require('./config')

const env = loadEnv({
  RELEASE_DATE: new Date(),
  RELEASE_VERSION: process.env.RELEASE_VERSION || new Date().getTime(),
})

module.exports = {
  siteMetadata: {
    title: `Super Integrity`,
    description: `Super Integrity`,
    author: `engineforce@gmail.com`,
    mapApiKey: process.env.MAP_API_KEY,
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
        path: `${__dirname}/src/components/about-page/images`,
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
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: Object.keys(env),
      },
    },
  ],
}
