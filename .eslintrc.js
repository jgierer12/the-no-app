module.exports = require(`deepmerge`)(
  require(`@jgierer12/js-configs/eslint`),
  require(`@jgierer12/js-configs/eslint/react`),
  {
    globals: {
      graphql: true,
    },
  }
);
