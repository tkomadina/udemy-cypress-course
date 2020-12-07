
Cypress.Commands.add('addTodo', name => {

  cy.get('.new-todo')
    .type(name + '{enter}');

});

Cypress.Commands.add('deleteTodo', () => {

  cy.wait('@create').then(item => {
    cy.log(item.responseBody.id)
    cy.request('DELETE', `localhost:3000/todos/${item.responseBody.id}`);
    cy.reload()

  })
});

Cypress.Commands.add('checkTodo', (itemName) => {

  cy
    .contains(itemName)
    .prev()
    .click();

  cy
    .contains(itemName)
    .parent().parent()
    .should('have.class', 'completed');

  // Turn off logging of the cy.window() to command log
  const el;
  cy.window({ log: false }).then((el) => { el = 'text' })

  const log = Cypress.log()
})