import FavoriteAnimal from '../FavoriteAnimal.vue'

describe('FavoriteAnimal', () => {
  it('toggles the answer visibility', () => {
    cy.mount(FavoriteAnimal)
    cy.get('input').type('Dog')
    cy.get('button').click()
    cy.get('p').should('contain', 'Your favorite animal is a Dog!')
    cy.get('button').click()
    cy.get('p').should('not.exist')
  })
})
