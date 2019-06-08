const appNames = require(`./app-names.json`);

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: appNames[process.env.GATSBY_BUILD_LANG],
        start_url: `/`,
        background_color: `#fa9d97`,
        theme_color: `#953131`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
