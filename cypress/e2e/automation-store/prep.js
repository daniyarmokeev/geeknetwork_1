///<reference types = "cypress" />



describe('automation test store', () => {

    before(() => {
        cy.fixture('products').then((data) => {
            globalThis.data = data;
            //this.data = data;
        })

        cy.fixture('example').as('ezizbai')
    })


    it('promises', () => {

        //cy.log("Hi")
        cy.visit("https://automationteststore.com/")
        cy.get('#customer_menu_top li a').click() // clicks on register
        cy.xpath("(//button[@type='submit'])[1]").click() // clicks on continue
        cy.get('.maintext').should('have.text', ' Create Account')

        cy.get('.maintext').then((anexample) => {
            const sometext = anexample.text()
            cy.log(sometext)
            expect(sometext).to.equal(" Create Account")
        })

        cy.url().should('include', 'account/create')
        //cy.title().should('include', 'A place to practice your automation skills!') // to check the title

        //cy.get('#customer_menu_top > li > a').click()
        //cy.url().should('include', 'account')



    });

    it('invoke and alias', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').click()

        cy.get("ul[class='thumbnails row'] li div a").eq(0).invoke('text').as('exampleof')

        cy.get('@exampleof').should('include', 'Cheeks')
    });
    it('alias', () => {

        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('price')
        cy.get('@price').then((x) => {

            let total = 0
            let prices = x.split('$')
            for (let i = 0; i < prices.length; i++) {
                cy.log(prices[i])

                total += prices[i]
            }
            cy.log(total)
        })


    });
    it('multiple tabs', () => {

        cy.visit("https://www.programsbuzz.com/")
        cy.get('.clearfix a').invoke('removeAttr', 'target').click()


    });

    it('browser navigation', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")


        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.go('back')
        cy.go('forward')
        cy.reload()
        cy.url().should('include', 'new')



    });

    it('alert', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get(':nth-child(1) > button').click()

        cy.on('window:confirm', (el) => {
            return true
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')

        cy.get(':nth-child(2) > button').click()

        cy.on('window:confirm', (el) => {
            return false
        })

        cy.get('#result').should('have.text', 'You clicked: Cancel')

    });

    it('alert with messages', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")



        cy.window().then(($el) => {

            cy.contains('Click for JS Prompt').click()
            cy.stub($el, 'prompt').returns('Yes')

        })
        //cy.get('#result').should('have.text', 'You entered: This is a test text')

    })

    it('upload', () => {


        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get('#file-upload').selectFile("cypress/fixtures/dog.png")

        cy.get('#file-submit').click()


    });

    it('autocomplete texts', () => {


        cy.visit("https://www.google.com/")

        cy.get("#APjFqb").type('A')

        cy.get(".G43f7e li").each(($el) => {

            const products = $el.text();

            cy.log(products)


            if ($el.text().includes('Amazon')) {
                cy.wrap($el).click()

            }



        })

    });

    it('practice drag and drop', () => {

        const dataTransfer = new DataTransfer()

        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")


        cy.get('#column-a').trigger('dragstart', { dataTransfer })

        cy.get('#column-b').trigger('drop', { dataTransfer })

    });

    it('methods', () => {




        // cy.visit('demoblaze')
        ///////////
        // cy.visit('https://automationteststore.com/')

        // cy.get('.subnav ul li a').filter('.active').should('contain', 'Home')
        ///////////


        //cy.get('.list-group').children('.list-group-item').should('contain', 'Phones')

        //cy.get('.list-group a').eq(2).should('contain', 'Laptop')

        //cy.get('#navbarExample').find('ul').find('li').should('contain', 'Cart')

        ////////// Tables Tuesday
        // cy.visit("https://afd.calpoly.edu/web/sample-tables")
        // cy.get('.small-12 table tbody tr td').first().should('have.text', ' Academic Senate Meeting')

        ///////////////
        cy.visit('https://www.hyrtutorials.com/p/calendar-practice.html')
        //cy.get('#tablepress-demo tbody tr td').first().should('contain', 'Gloria')
        //cy.get('#tablepress-demo tbody tr td').last().should('contain', '1')

        // cy.get('#tablepress-demo tbody tr')
        // .eq(0)
        // .should('contain', 'Reeves')


        ////// Not() Tuesday

        // cy.visit('https://demo.nopcommerce.com/')

        // cy.get('.nivo-controlNav a').not('.active').should('not.have.class', 'active')


        //// Parent

        //cy.visit('https://demo.nopcommerce.com/')

        // cy.get("ul[class='list']").eq(0).parent().should('contain', 'Information')

        //cy.contains('Shipping & returns').prev().should('contain', 'Sitemap')


    });


    it('date picker', () => {

        let date = new Date()

        let test = date.getDate()


        cy.log(test + 1)


        cy.visit('https://testautomationpractice.blogspot.com/')
        //cy.get('#datepicker').type('Cypress.io{enter}')

        cy.get('#datepicker').click()
        //cy.contains('Next').click()
        //cy.contains(test.toString()).click()

        cy.get('.ui-datepicker-calendar tbody tr td').each(($el) => {
            if ($el.text().includes(test.toString())) {
                cy.wrap($el).click()
            }
        })



    });


    it('iframe', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')


        cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
            .clear()
            .type('test')

        cy.get('[aria-label="Bold"]').click()

    });

    it('practicing fixtures', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.user_name)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)

        //cy.get('@ezizbai').then((data) => {
        //     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.email)
        // })

        cy.get('.oxd-button').click()

        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()

        cy.contains('Add Employee').click()

    });

    it('practicing custom commands', () => {

        cy.visit('https://automationteststore.com/')

        cy.get('.prdocutname').each(($el) => {
            if ($el.text().includes("Absolue Eye Precious Cells")) {
                cy.wrap($el).click()
            }
        })

        //cy.selectProduct("Absolue Eye Precious Cells")

    });

    it('custom commands', () => {


        cy.visit('https://automationteststore.com/')

        cy.get('.subnav').contains('Hair Care').click()

        cy.selectProducts(data.productName[1])

        cy.get('#topnav > .form-control').select('Cart')

        cy.get('tbody > :nth-child(2) > :nth-child(2) > a').should('have.text', data.productName[1])


    });

    it.only('base url', () => {

        // cy.visit('/')
        //cy.visit(Cypress.env("qa"))
        cy.open_homepage()

    });



});

