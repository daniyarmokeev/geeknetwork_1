///<reference types = "cypress" />

describe('practice waits', () => {

    it('implicit waits', () => {

        Cypress.config('defaultCommandTimeout', 2000)

        cy.visit("/")
        cy.get('.subnav', { timeout: 5000 }).contains('Makeup').click()

    });
    it.only('explicit waits', () => {

        cy.visit("/")
        cy.pause()
        cy.get('.subnav').contains('Makeup').click()
        //cy.get('.subnav').contains('Makeup').click()

    });


});