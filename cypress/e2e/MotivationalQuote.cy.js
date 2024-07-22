describe('Motivational Quote', () => {
    it('should display a stubbed motivational quote', () => {
      cy.intercept('GET', 'https://api.adviceslip.com/advice', {
        statusCode: 200,
        body: {
          advice: 'Stay motivated!',
        }
      })
      cy.visit('http://localhost:3000');
      cy.get('.motivational-quote').should('exist')
      cy.get('.motivational-quote').should('contain', 'Stay motivated!')
    });
  });