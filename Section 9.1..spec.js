describe('Validate Headers', () => {
    it('Successfully validate', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should
        ('include', 'application/json; charset=utf-8')
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).eq(200),
            expect(response.body).to.have.property('abilities')
            expect(response.body).to.have.property('base_experience')
        })
    });
})