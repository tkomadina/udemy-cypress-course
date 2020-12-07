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
  👶 challenge #1: write a custom command for deleting todo.
  as a function parameter, try to use the index number of 
  the todo item
*/
it('deletes a todo', () => {


    cy.addTodo('bunny stew 1')
        .addTodo('bunny stew 2')

    cy.deleteTodo()

});

// NOTE to the future self: How would you create a test that would wait for something in a POST request, 
// then would take that value (i.e. id) and delete the item based on that? 