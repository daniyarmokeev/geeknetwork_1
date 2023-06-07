

import login from '../../support/POM/test'
///<reference types = "cypress" />
const thisislogin = new login


describe('practice reusable methods', () => {
    before(() => {

        //thisislogin.visitlogin()

        cy.registerUserandLogin()

        // cy.fixture('profile').then((data) => {
        //     globalThis.data = data;
        // })
    });
    beforeEach(() => {
        //  cy.visit(Cypress.env('pb'))
    });

    it('verify accounts 1000', () => {

        // cy.get('#leftPanel > ul > :nth-child(2) > a').click()

        // // cy.get('.ng-scope > :nth-child(1) > .ng-binding').click()

        // cy.get("#accountTable tbody tr td a ").invoke('removeAttr', 'class').click()

        // cy.get('#balance').should('be.visible').then(($el) => {
        //     cy.log($el.text({ force: true }))
        // })

        //thisislogin.login(data.userName, data.password)


        // cy.selectCategoriesAS('Skincare')
        // cy.selectProducts(data.productName[5])
        // cy.get('#topnav > .form-control').select('Cart')
        // cy.get('tbody > :nth-child(2) > :nth-child(2) > a')
        //     .should('have.text', data.productName[5])
    });
});