/// <reference types="cypress" />

describe('Login and Logout test', function() {
    before(() => {
      cy.visit('http://zero.webappsecurity.com/index.html')
      cy.url().should('include', 'index.html')
      cy.get('#signin_button').click()
    })
    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.contains('Sign in').click()
    });
    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });
    it('Should try to login with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)

            cy.get('.board-header').should('contain.text', 'Cash Accounts')
        })
    });
    it('Should logout from teh application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()

        cy.get('strong').should('contain.text', 'Home')
        cy.get('strong').should('contain.text', 'Online Banking')
        cy.get('strong').should('contain.text', 'Feedback')
    });
})