
Cypress.Commands.add('addTodo', name => {

  cy.get('.new-todo')
    .type(name + '{enter}');

});