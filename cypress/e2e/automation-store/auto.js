///<reference types = "cypress" />


describe('auto complete ', () => {

    it('auto complete practice', () => {

        cy.visit("https://www.google.com/")

        cy.get("#APjFqb").type('A')

        cy.get(".G43f7e li").each(($el) => {

            if ($el.text().includes("Amazon")) {
                cy.wrap($el).click()
            }
        })

        cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()


    });

});