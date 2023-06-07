
import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given('I acess task', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
When("I enter username {word}", (userName) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userName)

})
And("I enter password {word}", (password) => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
})
And("I should validate sucessfull login", () => {
    cy.get('.oxd-button').click()

})
Then('I should navigate to {word}', (category) => {
    cy.selectCategoriesHR(category)

    cy.contains('Dependents').click({ force: true })
    cy.get(':nth-child(2) > .orangehrm-action-header > .oxd-button').click()
    cy.get('[type="file"]').selectFile('cypress/fixtures/dog.png', { force: true })
});














