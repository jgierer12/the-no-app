const path = require(`path`);

process.env.BUILD_LANG_PATH = path.join(
  __dirname,
  `src`,
  process.env.BUILD_LANG || `en`
);
const lang = require(process.env.BUILD_LANG_PATH);

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clips`,
        path: path.join(process.env.BUILD_LANG_PATH, `clips`),
      },
    },
    {
      resolve: `gatsby-plugin-copy-files`,
      options: {
        source: path.join(process.env.BUILD_LANG_PATH, `clips`),
        destination: `/clips`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: lang.appName,
        start_url: `/`,
        background_color: `#fa9d97`,
        theme_color: `#953131`,
        display: `minimal-ui`,
        icon: `src/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
