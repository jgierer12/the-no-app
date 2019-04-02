const path = require(`path`);

const lang = process.env.BUILD_LANG || `en`;
const langPath = path.join(__dirname, `src/${lang}`);
process.env.BUILD_LANG_PATH = langPath;

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clips`,
        path: `${langPath}/clips`,
      },
    },
    {
      resolve: `gatsby-plugin-copy-files`,
      options: {
        source: `${langPath}/clips`,
        destination: `/clips`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-no-app`,
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
