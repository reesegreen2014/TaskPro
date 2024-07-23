describe('Task Detail Page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://api.adviceslip.com/advice', {
        statusCode: 200,
        body: { slip: { advice: 'Test Quote' } }
      }).as('getAdvice');
       
      cy.visit('http://localhost:3000/add');
  
      cy.get('input[name="taskTitle"]').type('Sample Task Title');
      cy.get('textarea[name="taskDescription"]').type('Sample task description');
      cy.get('#taskPriority').select('2');
  
      cy.get('button').contains('Save Task!').click();
  
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Task successfully recorded!');
      });
  
      cy.get('button').contains('Return to Home').click();
  
      cy.get('.task-card').first().within(() => {
        cy.get('.view-details-button').click();
      });
  
      cy.url().should('include', '/task/1');
    });
  
    it('should render the task details correctly', () => {
      cy.get('.task-detail-page').within(() => {
        cy.get('h2').should('contain.text', 'Sample Task Title');
        cy.get('p').first().should('contain.text', 'Sample task description');
        cy.get('p').last().should('contain.text', 'Status: incomplete');
      });
    });
  
    it('should navigate back to home', () => {
      cy.get('button').contains('Back to Home').click();
      cy.get('.task-card').should('exist');
    });
  });