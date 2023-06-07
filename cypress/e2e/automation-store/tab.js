
describe('practicing new tabs', () => {
    it('practice', () => {

        cy.visit("https://www.programsbuzz.com/")

        cy.get('.clearfix a').invoke('removeAttr', 'target').click()

    });

    it('practice for checking', () => {

        cy.visit("https://the-internet.herokuapp.com/checkboxes")

        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')

    })
    it('practice for unchecking', () => {

        cy.visit("https://the-internet.herokuapp.com/checkboxes")
        cy.get('[checked=""]').uncheck().should('not.be.checked')


    })
    it('practice', () => {

        cy.visit("https://artoftesting.com/samplesiteforselenium")
        cy.get('#testingDropdown').select('Manual Testing')

        //cy.get("input[type='checkbox']").check(['Automation', 'Performance']).should('be.checked')

        //cy.get("#male").check()
    })
    it('practice back,forward,reload action items', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'new')

        cy.go('back')
        cy.go('forward')
        cy.reload()


    })
    it('practice alert', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        //cy.get(':nth-child(1) > button').click()

        cy.window().then(($el) => {
            cy.contains('Click for JS Prompt').click()
            cy.stub($el, 'prompt').returns('Ezizbai')
        })

        //cy.contains('Click for JS Confirm').click()

        // cy.on('window:confirm', (el) => {
        //     return true
        // })



        cy.get('#result').should('have.text', 'You entered: Ezizbai')


    })


    it('practice alert', () => {

        cy.visit("https://nxtgenaiacademy.com/alertandpopup/")

        cy.contains('Confirm Alert Box').click()

        cy.on('window:confirm', (el) => {
            return true
        })

    })

    it.only('practice alert', () => {
        cy.visit("https://nxtgenaiacademy.com/alertandpopup/")
        cy.window().then(($el) => {
            cy.contains('Prompt Alert Box').click()
            cy.stub($el, 'prompt').returns('No')
        })
        cy.get('#demoone').should('have.text', 'Sad to hear it ! ')
    })
});