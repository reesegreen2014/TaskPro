Cypress.Commands.add('setupIntercepts', () => {
    cy.intercept('GET', 'https://api.adviceslip.com/advice', {
      statusCode: 200,
      body: { slip: { advice: 'Test Quote' } }
    }).as('getAdvice');
  });
  
  Cypress.Commands.add('addSampleTask', () => {
    cy.visit('http://localhost:3000/add');
    cy.get('input[name="taskTitle"]').type('Sample Task Title');
    cy.get('textarea[name="taskDescription"]').type('Sample task description');
    cy.get('#taskPriority').select('2');
    cy.get('button').contains('Save Task!').click();
    cy.get('button').contains('Return to Home').click();
  });
  
  Cypress.Commands.add('navigateToHome', () => {
    cy.visit('http://localhost:3000');
  });
  