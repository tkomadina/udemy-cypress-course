/// <reference types="cypress" />

beforeEach(() => {

    cy.server()
    cy.route('POST', '/todos').as('create')
    cy
        .request('DELETE', 'localhost:3000/todos');

    cy
        .visit('localhost:3000');
});
/* 
  👨 challenge #3: add previously created commands to commands.d.ts
  file for autocompletion. note: other text editors than VS Code 
  might require some additional work. feel free to skip if it gets
  too frustrating
*/
it('completes a todo', () => {

    cy.addTodo('bunny stew 1')
        .addTodo('bunny stew 2')

    cy.checkTodo('bunny stew 1')
    cy.deleteTodo()



});

//NOTE to future self: if fixtures are added to this test it would make adding and checking more neat