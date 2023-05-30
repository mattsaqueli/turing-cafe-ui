describe('Cafe', () => {

  beforeEach(() => {
    cy.fixture('resData')
    .then(data => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
        statusCode: 200,
        body: data.reservations
      })
    })
    cy.visit('http://localhost:3000')
  })

  it('As a user I should see the site title', () => {
    cy.get('.app-title').should('contain', 'Turing Cafe Reservations')
  })

})