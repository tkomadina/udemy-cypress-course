/// <reference types="cypress" />
// look into common assertions https://docs.cypress.io/guides/references/assertions.html#Common-Assertions

beforeEach(() => {

  cy
    .visit('localhost:3000');

});

it('Adds one item', () => {
  cy.get('#add-todo').type("new item{enter}")

  cy.get('.todo').should("be.visible")

});

it('Adds two items', () => {

  cy.get('#add-todo').type("new item{enter}")
  cy.get('#add-todo').type("do the dishes{enter}")

  cy.get('.todo')
    .should('have.length', 2)

});

it.only('Marks item as completed', () => {
  cy.get('#add-todo').type("new item{enter}")

  cy.get('.toggle').click({ multiple: true }).should('have.class', 'completed')




});