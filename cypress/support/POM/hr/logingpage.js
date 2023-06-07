class login {


    visithrlogin(username, password) {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)

    }

    submit() {
        cy.get('.oxd-button').click()
    }

}
export default login