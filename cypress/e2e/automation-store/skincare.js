///<reference types = "cypress" />



describe('home page products', () => {

    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
        cy.get('.subnav').contains('Skincare').click()
    });

    it('should verify homepage', () => {

        cy.url().should('contain', 'path=43')
    })

    it('should sort the price from the highest to lowest', () => {


        cy.get("select[name='sort']").select('Price Low > High')

        cy.get('.thumbnail').find('.pricenew').invoke('text').as('newprices')

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('regularprices')


    });



});

