/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('localhost:3000');

});

it('Checks text of todo item', () => {

  cy.get('#add-todo').type("new item{enter}")
  cy.get('.destroy').click({ multiple: true, force: true })

  cy.get('#add-todo').type("buy milk{enter}")



  cy
    .get('.todo')
    .then(item => {
      expect(item).to.contain("buy milk")
    })
});

it('Checks texts of all todo items', () => {
  cy.get('#add-todo').type("new item{enter}")
  cy.get('.destroy').click({ multiple: true, force: true })

  cy.get('#add-todo').type("buy milk{enter}")
  cy.get('#add-todo').type("wash dishes{enter}")
  cy.get('#add-todo').type("make dinner{enter}")

  cy
    .get('.todo')
    .then(todos => {
      expect(todos[0]).to.contain.text('buy milk')
      expect(todos[1]).to.contain('wash dishes')
      expect(todos[2]).to.contain('make dinner')
    })

});

it('Has first todo item with text "wash dishes"', () => {

  cy.get('#add-todo').type("new item{enter}")
  cy.get('.destroy').click({ multiple: true, force: true })

  cy.get('#add-todo').type("buy milk{enter}")
  cy.get('#add-todo').type("wash dishes{enter}")
  cy.get('#add-todo').type("create todos list{enter}")

  cy
    .get('.todo')
    .should("have.length", 2)
    .eq(0)
    .should('contain.text', 'wash dishes');

});

it.only('Has first todo item with text "wash dishes" (solution 2)', () => {

  cy.get('#add-todo').type("new item{enter}")
  cy.get('.destroy').click({ multiple: true, force: true })

  cy.get('#add-todo').type("wash dishes{enter}")
  cy.get('#add-todo').type("create todos list{enter}")

  cy
    .get('.todo')
    .should(todos => { // .then command doesn't retry, should retries! 
      expect(todos[0]).to.contain.text("create todos list")
    })




  cy
    .get('.todo');

});