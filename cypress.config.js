/// <reference types = "cypress" />
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl :"https://magento.softwaretestingboard.com",
    // viewportHeight : 800,
    // viewportWidth : 900,
    experimentalStudio : true,
    trashAssetsBeforeRuns:true,
    screenshotOnRunFailure:true,
  },
});
