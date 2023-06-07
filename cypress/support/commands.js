// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("selectCategoriesHR", (categories) => {
    cy.get('.oxd-main-menu li').each(($el) => {
        if ($el.text().includes(categories)) {
            cy.wrap($el).click()
        }
    })
})

Cypress.Commands.add("selectCategoriesAS", (categories) => {
    cy.get('.subnav').contains(categories).click()
})

Cypress.Commands.add("selectProducts", (product) => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index) => {
        if ($el.text().includes(product)) {

            cy.get('.productcart').eq(index - 1).click()
        }
    })
})

Cypress.Commands.add("registerUserandLogin", () => {

    cy.visit(Cypress.env('pb_register'))
    cy.get("[id='customer.firstName']").as('firstname')

    cy.get('@firstname').then(() => {
        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('@firstname').type(r)
    })
    cy.get("[id='customer.lastName']").as('lastname')
    cy.get('@lastname').then(() => {
        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('@lastname').type(r)
    })
    cy.get("[id='customer.address.street']").as('Address')
    cy.get('@Address').then(() => {
        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('@Address').type(r)
    })
    cy.get("[id='customer.address.city']").as('city')
    cy.get('@city').then(() => {
        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('@city').type(r)

    })
    cy.get("[id='customer.address.state']").as('state')
    cy.get('@state').then(() => {
        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('@state').type(r)
    })
    cy.get("[id='customer.address.zipCode']").as('zipCode')
    cy.get('@zipCode').then(() => {
        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('@zipCode').type(r)
    })

    cy.get("[id='customer.ssn']").as('ssn')
    cy.get('@ssn').then(() => {
        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('@ssn').type(r)
    })

    cy.get("[id='customer.username']").as('username')
    cy.get('@username').then(() => {
        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('@username').type(r)
    })

    cy.get("[id='customer.password']").as('password1')
    cy.get("[id='repeatedPassword']").as('password2')

    cy.get('@password1').then(() => {
        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('@password1').type(r)
        cy.get('@password2').type(r)
    })

    cy.get("[value='Register']").click()

    cy.get('.title').should('contain', 'Welcome')
})