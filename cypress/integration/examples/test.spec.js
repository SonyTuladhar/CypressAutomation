describe('Opening url', () => {
    it('First time in cypress "Login" "Female"', () => {
      cy.visit('https://demo.nopcommerce.com/')
      cy.contains('Login').click()

      cy.contains('Female').click()

      cy.url().should('include', '/commands/actions')

      cy.get('.action-FirstName')
      .type('sonytuladhar@gmail.com')
      .should('have.value', 'sonytuladhar@gmail.com')
    })
  })