///<reference types = "cypress" />



describe('automation test store', () => {

    it('should visit the create account page and verify the page', () => {

        //cy.log("Hi")
        cy.visit("https://automationteststore.com/")
        cy.get('#customer_menu_top li a').click() // clicks on register
        cy.xpath("(//button[@type='submit'])[1]").click() // clicks on continue
        cy.get('.maintext').should('have.text', ' Create Account')
        cy.url().should('include', 'account/create')
        //cy.title().should('include', 'A place to practice your automation skills!') // to check the title

        //cy.get('#customer_menu_top > li > a').click()
        //cy.url().should('include', 'account')


        //cy.get('#customer_menu_top > li > a').click()



        //cy.get('#AccountFrm_firstname').type("Ezizbai")


        // cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit').click()
    });
    //cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=65"]').click()

    //cy.xpath("//a[@href='https://automationteststore.com/index.php?rt=product/category&path=65']").click()

    //cy.get('.maintext').should('have.text', "Books")

    // cy.get('[style="margin-bottom: 15px;"]').contains("Find the Items You'd Like to read")

});
    // it('should visit the page and verify hair care', () => {
    // });


