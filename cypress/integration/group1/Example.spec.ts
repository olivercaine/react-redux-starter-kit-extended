import { LoginResponse } from './../../../src/connectors/ApiConnector';

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

  it('SignInFormWrapper', () => {
    cy.get('a:contains(SignInFormWrapper)').click()
    // TODO: use Cypress login() command instead
    cy.get('input[type=email]').type('me@mail.com');
    cy.get('input[type=password]').type('paS$w0rd');

    cy.intercept('POST', 'http://www.google.com/authenticate', (req) => {
      // TODO: Use LoginResponse from ApiConnector
      req.reply({ submitting: false, generalErrors: ['Mocked API response'] } as LoginResponse);
    });

    cy.get('form:first').submit();
    cy.contains('Mocked API response')
  })
})
