describe('Task Detail Page', () => {
    beforeEach(() => {
      cy.setupIntercepts();
      cy.addSampleTask();
      cy.get('.task-card').first().within(() => {
        cy.get('.view-details-button').click();
      });
  
      cy.url().should('include', '/task/1');
    });
  
    it('should render the task details correctly', () => {
      cy.get('.task-detail-page').within(() => {
        cy.get('h2').should('contain.text', 'Sample Task Title');
        cy.get('p').first().should('contain.text', 'Sample task description');
        cy.get('p').should('contain', 'Status: incomplete');
      });
    });
  
    it('should navigate back to home', () => {
      cy.get('button').contains('Back to Home').click();
      cy.get('.task-card').should('exist');
    });
  
    it('should allow editing the task details', () => {
      cy.get('.detail-buttons').within(() => {
        cy.get('button').contains('Edit').click();
      });
  
      cy.get('input[type="text"]').clear().type('Updated Task Title');
      cy.get('textarea').clear().type('Updated task description');
      cy.get('#taskPriority').select('🟠 Priority 3 (Orange - Complete Soon)');
      cy.get('button[type="submit"]').contains('Save').click();
  
      cy.get('.task-content').within(() => {
        cy.get('h2').should('contain.text', 'Updated Task Title');
        cy.get('p').first().should('contain.text', 'Updated task description');
        cy.get('p').should('contain.text', 'Priority: 3');
      });
    });
    it('should display "Task not found" for invalid task ID', () => {
        cy.visit('http://localhost:3000/task/invalid-id');
        cy.get('.task-not-found').should('exist').and('contain.text', 'Task not found');
      });
    });
  