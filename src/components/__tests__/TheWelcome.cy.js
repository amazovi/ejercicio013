import TheWelcome from '../TheWelcome.vue'

describe('TheWelcome', () => {
  it('renders all welcome items', () => {
    cy.mount(TheWelcome)
    cy.get('h3').should('contain', 'Documentation')
    cy.get('h3').should('contain', 'Tooling')
    cy.get('h3').should('contain', 'Ecosystem')
    cy.get('h3').should('contain', 'Community')
    cy.get('h3').should('contain', 'Support Vue')
  })
})
