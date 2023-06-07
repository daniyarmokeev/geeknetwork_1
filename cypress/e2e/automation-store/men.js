///<reference types = "cypress" />



describe('home page products', () => {

    it('should verify homepage', () => {

        cy.viewport(2930, 3000)

        cy.visit("https://automationteststore.com/")
        cy.xpath("(//nav[@class='subnav']/ul/li)[6]").click()
        cy.get('.thumbnails li').each((x) => {
            if (x.text().includes('Skincare')) {
                cy.wrap(x).click()
            }
        })

        cy.get('.maintext')


        cy.get('.maintext').then((element) => {

            const actual = element.text()
            cy.log(actual)

            const expected = 'Skincar1'

            expect(expected).to.equal(actual)
        })


    });

})