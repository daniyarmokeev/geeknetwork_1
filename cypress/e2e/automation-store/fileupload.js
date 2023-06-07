///<reference types = "cypress" />

describe('file upload', () => {
    it('should upload the file', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').selectFile('cypress/fixtures/dog.png')

        cy.get('#file-submit').click()

        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    });

    it.only('should upload the file', () => {
        cy.visit('https://tus.io/demo.html')

        cy.get('#js-file-input').selectFile('cypress/fixtures/dog.png')

        //cy.get('#file-submit').click()

        cy.get(".heading").should('have.text', 'The upload is complete!')
    });
});