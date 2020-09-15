/// <reference types="cypress" />
Cypress.Commands.add('deleteTodo', name => {


})

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

    cy.wait('@create').then(item => {
        cy.log(item.responseBody.id)
        cy.request('DELETE', `localhost:3000/todos/${item.responseBody.id}`);

    })

    cy.reload()


});