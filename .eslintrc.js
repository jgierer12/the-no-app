module.exports = require(`@jgierer12/merge-deep`)(
  require(`@jgierer12/js-configs/eslint/react`),
  {
    globals: {
      graphql: true,
    },
  }
);
