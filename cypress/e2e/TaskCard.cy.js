describe('Task Card Component', () => {
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

    });
  
    it('should display the new task card with correct information', () => {
      cy.get('.task-card').first().within(() => {
        cy.get('.task-priority').should('exist');
        cy.get('h3').should('contain.text', 'Sample Task Title');
        cy.get('p').should('contain.text', 'Sample task description');
        cy.get('.task-status').should('contain.text', 'Incomplete');
        cy.get('button').contains('Mark as Complete').should('exist');
        cy.get('button').contains('Remove Task').should('exist');
        cy.get('.view-details-button').should('exist');
      });
    });
  
    it('should mark the task as complete and update the status', () => {
      cy.get('.task-card').first().within(() => {
        cy.get('button').contains('Mark as Complete').click();
        cy.get('.task-status').should('contain.text', 'Completed');
        cy.get('button').contains('Mark as Incomplete').should('exist');
      });
    });
  
    it('should remove the task and no longer display it', () => {
      cy.get('.task-card').first().within(() => {
        cy.get('button').contains('Remove Task').click();
      });
      cy.get('.task-card').should('not.exist');
    });

    it('should navigate to task details page', () => {
      cy.get('.task-card').first().within(() => {
        cy.get('.view-details-button').click();
      });
      cy.url().should('include', '/task/1');
      cy.get('.task-detail-page').should('exist');
    });
  });
