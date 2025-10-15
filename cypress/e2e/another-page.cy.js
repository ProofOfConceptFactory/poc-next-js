describe('another page', () => {
    it('check h1 contains Another page', () => {
        cy.visit('/another-page')
        cy.contains('h1', 'Another page')
    })
})
