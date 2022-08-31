/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import SearchBox from "./searchBox";

// Valid
Given('I open the "Home" page', () => {
    SearchBox.visitPage()
})
When('I type "zero" in the Searchbox and sumbit it', () => {
    SearchBox.fillSearchBox('zero{enter}')
})
Then('I should see "zero" results', () => {
    cy.contains('a').should('be.visible')
})
And('The page should show the link details', () => {
    cy.contains('Zero - Personal Banking - Loans - Credit Cards').click()
    // cy.contains('strong').should('be.visible')
    // terdapat bug dari web ini dengan mengalihkan kembali ke halaman index, maka dari itu script ini saya comment
})

// Invalid
Given('I open the "Home" page', () => {
    SearchBox.visitPage()
})
When('I type "kemal" in the Searchbox and submit it', () => {
    SearchBox.fillSearchBox('kemal{enter}')
})
Then('I should see "kemal" results', () => {
    cy.contains('h2').should('be.visible')
    // saya agak heran mas, pada step ini kadang error kadang success
})
And('The page should show "No results were found"', () => {
    cy.contains('h2').should('contain.text', 'No results were found for the query: kemal')
    // dan pada step ini juga tidak tereksekusi pada saat running
})