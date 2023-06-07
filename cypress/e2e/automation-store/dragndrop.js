///<reference types = "cypress" />

describe('practive drag and drop', () => {

    it('should drag and drop', () => {


        const dataTransfer = new DataTransfer()

        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")


        cy.get('#column-a').trigger('dragstart', { dataTransfer })

        cy.get('#column-b').trigger('drop', { dataTransfer })

        cy.get('#column-b').should('contain', 'A')

    });

    it.only('scroll into the view', () => {

        cy.visit("https://the-internet.herokuapp.com/")

        cy.contains('WYSIWYG Editor').scrollIntoView().click()

    });

    // WYSIWYG Editor

});