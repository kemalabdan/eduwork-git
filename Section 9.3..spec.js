describe('Validate Headers', () => {
    it('Successfully validate', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should
        ('include', 'application/json; charset=utf-8')
        // cy.get('@pokemon').its('body').should('include', {ability: 'name'})
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).eq(200),
            expect(response.body).to.have.property('abilities')
            expect(response.body).to.have.property('base_experience')
        })
    });
    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status').should('eq', 200)
    });
    it.only('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('include', {name : 'ditto'})
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) =>{
            expect(response.body.abilities[0].ability.name).to.eq('limber')
            expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/')

        })
    });
})