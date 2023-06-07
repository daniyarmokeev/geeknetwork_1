///<reference types = "cypress"/>
import hr from "../../support/POM/hr/logingpage"

describe('practice hr', () => {

    const loginpage = new hr

    before(() => {

        cy.fixture('testData').then((data) => {
            globalThis.data = data;
            //this.data = data;
        })
    })

    it('should login to the page', () => {

        loginpage.visithrlogin(data.username, data.password)

        loginpage.submit()

        cy.selectCategoriesHR('Admin')

        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()

    });

});