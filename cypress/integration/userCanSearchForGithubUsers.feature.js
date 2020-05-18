describe('User can search for GitHub users', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: "https://api.github.com/search/users?q=barack",
      response: 'fixture:search_response_barack.json'
    })
    cy.visit('/')
  })

  it('successfully, providing a search query', () => {
    cy.get('input').type('Barack')
    cy.get('.button').contains('Search').click()
    cy.get('#result-1').should('contain', 'barack')
    cy.get('#img-1').should('exist')
    cy.get('#result-2').should('contain', 'PresidentObama')
    cy.get('#img-2').should('exist')
    cy.get('#result-3').should('contain', 'shentibeitaokongle')
    cy.get('#img-3').should('exist')
  })
})