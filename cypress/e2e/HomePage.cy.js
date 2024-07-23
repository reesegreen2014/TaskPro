describe('HomePage functionality', () => {
    beforeEach(() => {
      cy.navigateToHome();
    });
  
    it('should display initial elements', () => {
      cy.get('.header').should('exist');
      cy.get('.header-buttons').should('exist');
      cy.get('.motivational-quote').should('exist');
      cy.get('.welcome-message').should('contain', 'Welcome to TaskPro!');
      cy.get('.filter').should('exist');
      cy.get('.your-tasks').should('exist');
    });
  
    it('should add a new task and display it on the homepage', () => {
      cy.addSampleTask();
      cy.get('.task-card').should('exist');
      cy.get('.task-priority').should('contain', 'Priority Level: Priority 2 (Blue - Start Planning)');
      cy.get('h3').should('contain', 'Sample Task Title');
      cy.get('.task-card > p').should('contain', 'Sample task description');
      cy.get('.task-status').should('contain', 'Status: Incomplete');
      cy.get('.task-card-buttons > :nth-child(1)').should('exist');
      cy.get('.task-card-buttons > :nth-child(2)').should('exist');
      cy.get('.view-details-button').should('exist');
    });
  });
  