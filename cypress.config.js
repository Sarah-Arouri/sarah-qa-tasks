/// <reference types = "cypress" />
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
     // implement node event listeners here
      on("file:preprocessor", cucumber());

    },
    baseUrl :"https://magento.softwaretestingboard.com",
    // viewportHeight : 800,
    // viewportWidth : 900,
    experimentalStudio : true,
    trashAssetsBeforeRuns:true,
    screenshotOnRunFailure:true,
    video:true,
    trashAssetsBeforeRuns:true
  },
});
