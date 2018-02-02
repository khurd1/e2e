describe('integration', function () {
  it('visits integration page', function () {
    cy.visit('https://staging.integration.silvercloudinc.io/')

    // perform search using search bar on results list page and click on first item
    cy.contains('Results List').click()
      .url().should('include', '/sample/result-list.html')
      .get('#sc-search-input-1123456789ff9876543210ee')
      .type('credit')
      .should('have.value', 'credit')
    cy.contains('Ask').click()
      .url().should('include', 'sample/result-list.html?q=credit')
    cy.get('.sc-result-item').first().click()
    cy.url().should('include', 'id=')
  })
})

describe ('integration', function () {
  it('')
})
