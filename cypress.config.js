const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },

    projectId: "ckvxze",

    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,


    viewportHeight: 1080,
    viewportWidth: 1630,

    specPattern: "**/*{js,jsx,ts,tsx,feature}",
    baseUrl: "https://automationteststore.com/",

    env: {

      hr: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      pb_register: "https://parabank.parasoft.com/parabank/register.htm",
      pb: "https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC"


    },

    reporter: 'mochawesome',

    retries: {

      runMode: 0,

      openMode: 0

    }





  },

});
