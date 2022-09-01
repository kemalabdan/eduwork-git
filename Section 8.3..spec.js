/// <reference types="cypress" />

describe('Create Users', () => {
    it('Add a new user', () => {
        var user = {
            "name": "Kemal",
            "job": "QA"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201),
            expect(response.body).to.have.property('name','Kemal')
            expect(response.body).to.have.property('job', 'QA')
        })
    });
})