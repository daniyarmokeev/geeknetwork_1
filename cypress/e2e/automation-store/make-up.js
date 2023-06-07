
///<reference types = "cypress" />


describe('make up category', () => {



    before(() => {
        cy.log("We are running Make Up page")
    });

    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
        cy.get('.subnav').contains('Makeup').click()
    });

    it('should verify make up page', () => {
        //cy.visit("https://automationteststore.com/")
        //cy.get('.subnav').contains('Makeup').click()
        cy.get('.thumbnails li div a').eq(2).invoke('text').as('ezizbai')
        cy.get('@ezizbai').should('include', 'Face')

        //cy.get('.maintext').should('have.text', 'Makeup')

    });

    it('should verify cheeks page products', () => {
        //cy.visit("https://automationteststore.com/")
        //cy.get('.subnav').contains('Makeup').click()
        cy.get("ul[class='thumbnails row'] li").each((elements) => {
            if (elements.text().includes('Cheeks')) {
                cy.wrap(elements).click()
            }
        })

        cy.get('.maintext').should('have.text', 'Cheeks')
        cy.get('.maintext').then((x) => {

            const actualtext = x.text()
            const expectedtext = "Cheeks"
            expect(expectedtext).to.equal(actualtext)

        })

    });

    it('should verify benefit pearl page products', () => {
        //cy.visit("https://automationteststore.com/")
        //cy.get('.subnav').contains('Makeup').click()
        cy.get("ul[class='thumbnails row'] li").contains('Cheeks').click()

        cy.xpath("(//a[@class='prdocutname'])[3]").click()

        cy.get('.bgnone').then((x) => {

            const actualtext = x.text()
            const expectedtext = "BeneFit Girl Meets Pearl"
            expect(expectedtext).to.equal(actualtext)

        })
    })


    it('should verify skinsheen bronzer stick page product', () => {


        //cy.visit("https://automationteststore.com/")
        // cy.get('.subnav').contains('Makeup').click()
        cy.get("ul[class='thumbnails row'] li").contains('Cheeks').click()
        cy.xpath("//a[text()='Skinsheen Bronzer Stick']").click()
        cy.get("ul[class='breadcrumb'] li").each((elements) => {

            if (elements.text().includes('Skinsheen Bronzer Stick')) {

                const actual = elements.text().includes('Skinsheen Bronzer Stick')
                expect(true).to.equal(actual)

            }
        })








    })

    it('should sort the price from the highest to lowest', () => {

        //cy.visit("https://automationteststore.com/")
        //cy.get('.subnav').contains('Makeup').click()
        cy.get("select[name='sort']").select('Price High > Low')

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('prices')

        cy.get('@prices').then((x) => {


            const expected = ['38.50,34.00,29.50,25.00,5.00']


            const actual = x.split('$')

            const test = [...new Set(actual)]

            let test1 = test.join().replace(',', '').split(' ')

            expect(...expected).to.equal(...test1)
        })


    });

})







