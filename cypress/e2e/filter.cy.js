describe('Filter Component - Task Filtering', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://api.adviceslip.com/advice', {
        statusCode: 200,
        body: { slip: { advice: 'Test quote' } }
      });
  
      const tasks = [
        { id: 1, taskTitle: 'Completed Task', taskDescription: 'This task is completed.', priority: '1', status: 'complete' },
        { id: 2, taskTitle: 'Incomplete Task', taskDescription: 'This task is incomplete.', priority: '2', status: 'incomplete' }
      ];
  
      localStorage.setItem('tasks', JSON.stringify(tasks));
      cy.visit('http://localhost:3000');
    });
  
    it('should filter tasks by complete status', () => {
      cy.get('select#filter').select('complete');
      cy.get('.task-cards').children().should('have.length', 1).and('contain', 'Status: Complete');
    });
  
    it('should filter tasks by incomplete status', () => {
      cy.get('select#filter').select('incomplete');
      cy.get('.task-cards').children().should('have.length', 1).and('contain', 'Status: Incomplete');
    });
  });
  
  