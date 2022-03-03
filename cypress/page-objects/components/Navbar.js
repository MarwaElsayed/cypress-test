import BasePage from "../BasePage";

export default class Navbar {

    static displayNavBar() {
        cy.isVisible('.MuiTabs-flexContainer')
    }

    static clickOnChannelAnalyticsTab() {
        cy.wait(3000)
        cy.get(':nth-child(3) > .MuiButton-endIcon > [data-testid="KeyboardArrowDownIcon"]').click()
    }

    static clickOnAnalyticsoption() {
        cy.wait(1000)
        cy.get('[tabindex="0"] > a').click()
    }

    
}
