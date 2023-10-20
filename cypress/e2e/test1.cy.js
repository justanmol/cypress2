/// <reference types="cypress" />

it('Google Search', () => {
  cy.visit('https://google.com')

  cy.get('#APjFqb').type('Ethos life')
  cy.contains('Google Search').click()
})