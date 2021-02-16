beforeEach(() => {
    cy.visit('http://localhost:8888')
})

describe('Unit test for the Fixed header', () => {
    it('Logo is visible', () => {
        cy
            .get('.Logo img')
            .should('be.visible')
            .should('have.attr', 'width', '200px')
    })
    it('CartExists', () => {
        cy.get('.cartButton').should('be.visible')
    })
    it('InstaExists', () => {
        cy.get('.instaButton').should('be.visible')
    })
    it('onclick check for contact', () => {
        cy.get('.contactButton').click()
        cy.url().should('include', '/contact')
        cy.url().should('eq', 'http://localhost:8888/contact')
    })

})

