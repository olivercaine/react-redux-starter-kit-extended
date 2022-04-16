describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays two todo items by default', () => {
    cy.contains('React Redux Starter Kit')
  })
})
