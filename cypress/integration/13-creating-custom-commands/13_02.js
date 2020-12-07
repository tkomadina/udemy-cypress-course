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
  👦 challenge #2: write a custom command for completing todo.
  as a function parameter, try to use the text of the todo item
*/
it('completes a todo', () => {

    cy.addTodo('bunny stew 1')
        .addTodo('bunny stew 2')

    cy.checkTodo('bunny stew 1')


});

//NOTE to future self: if fixtures are added to this test it would make adding and checking more neat