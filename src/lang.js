import preval from "preval.macro";

export const lang = preval`module.exports = require(process.env.BUILD_LANG_PATH)`;
