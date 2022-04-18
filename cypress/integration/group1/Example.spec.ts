import { LoginResponse } from './../../../src/connectors/ApiConnector';

describe('Example', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Home', () => {
    it('Contains header "React Redux Starter Kit"', () => {
      cy.contains('React Redux Starter Kit').screenshot()
    })
  })

  describe('Counter', () => {
    it('Increment button increases the counter value', () => {
      cy.get('a:contains(Counter)').click()
      cy.get('button:contains(Increment)').click()
      cy.contains('Counter: 1')
    })

    it('Double (Async) doubles the counter value', () => {
      cy.get('a:contains(Counter)').click()
      cy.get('button:contains(Increment)').click()
      cy.get('button:contains(Double (Async))').click()
      cy.contains('Counter: 2')
    })

    it('State is retained on reload', () => {
      cy.get('a:contains(Counter)').click()
      cy.get('button:contains(Increment)').click()
      cy.contains('Counter: 1')
      cy.reload()
      cy.contains('Counter: 1')
    })

    it.skip('Increases on login attempt', () => { // TODO: Fix this test
      cy.get('a:contains(Counter)').click()
      cy.contains('Counter: 0')

      cy.get('a:contains(SignInFormWrapper)').click()
      cy.login('me@mail.com', 'paS$w0rd')

      cy.intercept('POST', 'http://www.google.com/authenticate', (req) => {
        req.reply({
          token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhw`
        } as LoginResponse);
      });
      cy.get('button:contains(Login)').click().pause()

      cy.get('a:contains(Counter)').click()
      cy.contains('Counter: 1')
    })
  })

  it('SignInFormWrapper performs auth request', () => {
    cy.get('a:contains(SignInFormWrapper)').click()
    cy.login('me@mail.com', 'paS$w0rd')

    cy.intercept('POST', 'http://www.google.com/authenticate', (req) => {
      req.reply({
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhw`
      } as LoginResponse);
    });

    cy.get('form:first').submit();
    cy.contains('Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhw')
  })
})
