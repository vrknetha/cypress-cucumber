const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  const options = browserify.defaultOptions;
  options.browserifyOptions.plugin.unshift(["tsify", "./tsconfig.json"]);
  on("file:preprocessor", cucumber(options));
};
