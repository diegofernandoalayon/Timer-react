describe('Timer app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('open app ',() => {
    cy.contains('iniciar')
    cy.contains('Reset')
    cy.contains('Edit')
  })
  it('setted time in timer', () => {
    cy.contains('Edit').click()
    cy.get('.input-container div input').first().type('1') // pimer input 
    cy.get('.input-container div input').eq(1).type('23') // seleccionar segundo
    cy.contains('Establecer').click()
    cy.wait(2000)
    cy.contains('parar').click()

  })
  // it('stop timer', () => {
  //   cy.wait(200)
  //   cy.contains('parar').click()
  // })
})

// describe('empty spec', () => {
//   it('passes', () => {
//     // cy.visit('https://example.cypress.io')
//      cy.visit('http://localhost:3000')
//   })
// })