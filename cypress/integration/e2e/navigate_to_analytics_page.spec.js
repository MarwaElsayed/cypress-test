import LoginPage from '../../page-objects/pages/LoginPage'
import AnalyticsPage from '../../page-objects/pages/AnalyticsPage'
import Navbar from '../../page-objects/components/Navbar'
describe('navigate to analytics page successfully', () => {
    before(function () {
        cy.visit('/')
        cy.url().should('match', /login/)
        LoginPage.login(Cypress.env('loginUsername'), Cypress.env('loginPassword'))
        cy.wait(1000)
        cy.url().should('match', /monitor_list/)
    })

    it('logged user should be able to navigate to insights URL', () => {
        Navbar.displayNavBar()
        Navbar.clickOnChannelAnalyticsTab()
        Navbar.clickOnAnalyticsoption()
        cy.url().should('match', /insights/)
    
    })
})