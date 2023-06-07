///<reference types = "cypress" />



describe('practice table', () => {
    it('practice table', () => {

        cy.visit('https://tablepress.org/demo/')

        cy.get('#tablepress-demo tbody tr td')
            .first()
            .should('contain', 'Gloria')

        cy.get('#tablepress-demo tbody tr td')
            .last()
            .should('contain', '20')

        cy.get('#tablepress-demo tbody tr td')
            .eq(21)
            .should('contain', 'Zena')

    });

    it.only('finding table with each', () => {

        cy.visit('https://tablepress.org/demo/')

        cy.get('#tablepress-demo tbody tr td')
            .each(($el) => {



                if ($el.text().includes('Graham')) {
                    cy.wrap($el).click()

                }

            })

    });


});
