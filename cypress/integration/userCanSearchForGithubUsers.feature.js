describe('User can search for GitHub users', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: "https://api.github.com/search/users&q=users:barack",
      response: 'fixture:search_response_barack.json'
    })
    cy.visit('/')
  })

  it('successfully, providing a search query', () => {
    cy.get('input').type('Barack')
    cy.get('.button').contains('Search').click()
    cy.get('#result-1').should('contain', 'barack')
  })
})