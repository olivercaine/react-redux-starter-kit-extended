// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare global {
  namespace Cypress { // eslint-disable-line @typescript-eslint/no-namespace
    interface Chainable<Subject> {
      login(username: string, password: string): void;
    }
  }
}

Cypress.Commands.add('login', (username, password) => {
  cy.get('input[type=email]').type(username);
  cy.get('input[type=password]').type(password);
  cy.get('form:first').submit();
});

export { }; // Convert this to a module so Cypress can be defined globally
