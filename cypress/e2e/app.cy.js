describe('hello from next.js', () => {
  it('check h1 contains Hello from Next.js', () => {
    cy.visit('/')
    cy.contains('h1', 'Hello from Next.js!👋')
  })
})
