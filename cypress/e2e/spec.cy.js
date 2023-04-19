
describe.only('validate chronometer', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })
  describe('start stop chronometer', () => {
    it('start chronometer', () => {
      cy.contains('iniciar').click()
    })
    it('stop chronometer', () => {
      cy.wait(4000)
      cy.contains('parar').click()
      // cy.get('.container-display > :nth-child(5)')
      cy.get('.container-display > :nth-child(5)').should('have.text', '04')
      // .should((a) => {
      //   expect(a).to.contain('01')
      //   console.log(a.span)
      // })
    })
    it('reset chronometer', () => {
      cy.contains('Reset').should('be.visible').click()
      cy.get('.container-display > :nth-child(5)').should('have.text', '00')
    })
  })
})
describe('Timer app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('open app ', () => {
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
