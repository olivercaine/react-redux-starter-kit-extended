describe('Example', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('UI', () => {
    cy.contains('React Redux Starter Kit').screenshot()
  })

  it('Increment', () => {
    cy.get('a:contains(Counter)').click()
    cy.get('button:contains(Increment)').click()
    cy.contains('Counter: 1')
  })

  it('Double (Async)', () => {
    cy.get('a:contains(Counter)').click()
    cy.get('button:contains(Increment)').click()
    cy.get('button:contains(Double (Async))').click()
    cy.contains('Counter: 2')
  })

  it.skip('SignInFormWrapper', () => {
    cy.get('a:contains(SignInFormWrapper)').click()
    cy.intercept('GET', 'random-number?t=*', (req) => {
      req.reply({ 'randomNumber': 55 }); // TODO add typing to this
    });
  })
})
