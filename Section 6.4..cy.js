/// <reference types="cypress" />

describe('Navbar test', function() {
    before(() => {
      cy.visit('http://zero.webappsecurity.com/index.html')
      cy.url().should('include', 'index.html')
    })
    it('Should display Online Banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h3').should('contain.text', 'Our Bank is trusted by over 1,000,000 customers world wide.')
    });
    it('Should display Feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('.form-inputs').should('be.visible')
    });
    it('Should display Home content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('#carousel').should('be.visible')
    });
})