describe('HomePage', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
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
        cy.get('[href="/add"]').contains('Add a Task').click();
        cy.get('#taskTitle').type('Testing...');
        cy.get('#taskDescription').type('Testing typing a task...');
        cy.get('#taskPriority').select('2');
        cy.get('.task-form > :nth-child(6)').click();
        cy.get('.return-button').click();
        cy.get('.task-card').should('exist');
        cy.get('.task-priority').should('contain', 'Priority Level: Priority 2 (Blue - Start Planning)');
        cy.get('h3').should('contain', 'Testing...');
        cy.get('.task-card > p').should('contain', 'Testing typing a task...');
        cy.get('.task-status').should('contain', 'Status: Incomplete');
        cy.get('.task-card-buttons > :nth-child(1)').should('exist');
        cy.get('.task-card-buttons > :nth-child(2)').should('exist');
        cy.get('.view-details-button').should('exist');
    });
  });
  