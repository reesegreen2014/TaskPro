describe('Motivational Quote', () => {
    it('should display a stubbed motivational quote', () => {
      cy.setupIntercepts();
      cy.navigateToHome();
      cy.get('.motivational-quote').should('exist');
      cy.get('.motivational-quote').should('contain', 'Test Quote');
    });
  });
  