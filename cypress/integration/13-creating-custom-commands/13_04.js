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
  🤓 challenge #4: add a custom log to your "complete todo" command. 
  you can find  an example on how to do that in documentation: 
  https://on.cypress.io/cypress-log
*/
it('completes a todo', () => {

    cy.addTodo('bunny stew 1')
        .addTodo('bunny stew 2')

    cy.checkTodo('bunny stew 1')


});

//NOTE to future self: if fixtures are added to this test it would make adding and checking more neat