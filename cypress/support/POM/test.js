class testt {

    visitlogin() {
        cy.registerUserandLogin()
    }
    login(x, y) {
        cy.get(':nth-child(2) > .input').type(x)
        cy.get(':nth-child(4) > .input').type(y)
    }
    elements = {

    }



}

export default testt