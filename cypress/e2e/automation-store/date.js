///<reference types = "cypress" />


describe('select a date', () => {
    it('practicing date', () => {
        cy.visit('https://testautomationpractice.blogspot.com/'
        )
        //cy.get("[id='datepicker']").type('Cypress.io{enter}')


        let date = new Date()
        let test = date.getDate()//10 as a Number data type
        let d = (test + 1).toString()

        cy.log(d)

        cy.get("[id='datepicker']").click()
        cy.contains('Next').click()
        cy.contains('Next').click()
        cy.contains('Next').click()
        cy.contains('Next').click()
        cy.contains('Next').click()


        cy.get('.ui-datepicker-calendar tbody tr td').each(($el) => {

            if ($el.text().includes(d)) {
                cy.wrap($el).click()
            }


        })


    });
});