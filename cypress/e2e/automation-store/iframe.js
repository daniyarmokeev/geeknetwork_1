///<reference types = "cypress" />


describe('practice iframe', () => {

    it('iframe', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
            .clear()
            .type('test')

        cy.get('[aria-label="Bold"]').click()

    });
    it.only('Ulan ava', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get(usernameelemnti).type('Admin')
        cy.get(passwordunelemenit).type('admin123')


        // cy.get('#singleframe')
        //     .its('0.contentDocument.body')
        //     .should('be.visible')
        //     .then(cy.wrap)
        //     .clear()
        //     .type('test')

        // cy.get('[aria-label="Bold"]').click()

    });
});