describe('Add Task Form Page', () => {
    beforeEach(() => {
      cy.setupIntercepts();
      cy.visit('http://localhost:3000/add');
    });
  
    it('should contain a form', () => {
        cy.get('.task-form-header').contains('h2', 'Add a New Task!');
        cy.get('#taskTitle')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Title of task goes here . . .');
      cy.get('textarea[name="taskDescription"]')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Task description goes here . . .');
      cy.get('select[name="taskPriority"]')
        .should('be.visible')
        .find('option')
        .should('have.length', 4)
        .then(options => {
          const optionValues = [
            '🟢 Priority 1  (Green - Whenever)',
            '🔵 Priority 2 (Blue - Start Planning)',
            '🟠 Priority 3 (Orange - Complete Soon)',
            '🔴 Priority 4 (Red - Do First!)'
          ];
          options.each((index, option) => {
            expect(option).to.have.text(optionValues[index]);
          });
        });
      cy.get('button').contains('Save Task!').should('be.visible');
      cy.get('button').contains('Return to Home').should('be.visible');
    });
  
    it('should add a new task', () => {
      const newTask = {
        taskTitle: "Test Title 1",
        taskDescription: "Test Description 1"
      };
      cy.get('input[name="taskTitle"]').type(newTask.taskTitle);
      cy.get('textarea[name="taskDescription"]').type(newTask.taskDescription);
      cy.get('select[name="taskPriority"]').select('2');
      cy.get('button').contains('Save Task!').click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Task successfully recorded!');
      });
    });
  
    it('should navigate back to home page upon clicking "Return to Home" button', () => {
      cy.get('button').contains('Return to Home').click();
      cy.url().should('eq', 'http://localhost:3000/');
    });
  });
  