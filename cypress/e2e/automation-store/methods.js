///<reference types = "cypress" />

describe('practice methods', () => {

    it('practice methods', () => {

        cy.visit('https://automationteststore.com/')

        cy.get('.subnav ul li a').filter('.active').should('contain', 'Home')

    });

    it('practice methods', () => {

        cy.visit('https://afd.calpoly.edu/web/sample-tables')

        //cy.get('.list-group').children('.list-group-item').should('contain', 'Laptops')

        //cy.get('.list-group a').eq(2).should('contain', 'Laptop')

        //cy.get('#navbarExample').find('ul').find('li').should('contain', 'Home')

    });

    it.only('practie removing active class', () => {
        cy.visit('https://automationteststore.com/')

        // cy.get('.nivo-controlNav a')
        //     .not('.active')
        //     .should('not.have.class', 'active')

        cy.get(".contact")
            .parent()
            .should('contain', 'Contact Us')


    });

});