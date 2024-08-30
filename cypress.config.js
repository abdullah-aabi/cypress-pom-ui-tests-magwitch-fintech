const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Defining env variables with values
    env: {
      userId: "qa.abdullah360+cypress@gmail.com",
      password: "Parser@123"
    },
    // Defining baseUrl of product
    baseUrl: 'https://qa.asterod.party',
    defaultCommandTimeout: 60000,

    // Defining resolution as 1366x720 for web page
    viewportHeight: 1080,
    viewportWidth: 1920
  },
});
