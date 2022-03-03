import LoginPage from '../../page-objects/pages/LoginPage' 
describe('login to CXM successfully', () => {
    

    it('user should be able to login to CXM Successfully', () => {
        cy.visit('/')
        cy.url().should('match', /login/)
        LoginPage.login(Cypress.env('loginUsername'), Cypress.env('loginPassword'))
        cy.wait(1000)
        cy.url().should('match', /monitor_list/)
       
    })
    
})