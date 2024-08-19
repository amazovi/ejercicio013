import ColorfulText from '../ColorfulText.vue'

describe('ColorfulText', () => {
  it('changes color on hover', () => {
    cy.mount(ColorfulText)
    cy.get('p').should('have.css', 'color', 'rgb(0, 0, 0)') // Black color
    cy.get('p').trigger('mouseover')
    cy.get('p').should('have.css', 'color', 'rgb(255, 0, 0)') // Red color
    cy.get('p').trigger('mouseleave')
    cy.get('p').should('have.css', 'color', 'rgb(0, 0, 0)') // Black color again
  })
})
