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
Cypress.Commands.add('loginUser', (username, password) => {
    cy.get('.MuiPaper-root').should('be.visible')
    cy.get(':nth-child(4) > .MuiOutlinedInput-root > #password-basic').type(username)
    cy.get('.css-79elbk > .MuiFormControl-root > .MuiOutlinedInput-root > #password-basic').type(password)
    cy.get('.MuiLoadingButton-root').click()
})

Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible')
})
