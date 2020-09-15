/// <reference types="cypress" />

/* 
  ⚠️ remember you can run single test by using it.only
  ⚠️ .visit() command is not included in these tests
  ⚠️ before each of these tests, all todos are deleted
  💡 there is a LOT you can do with .request() command. read
  about it in documentation https://on.cypress.io/request and
  have some fun with it!
*/

beforeEach(() => {

  cy
    .request('DELETE', 'localhost:3000/todos');

  cy.request(
    "POST",
    "localhost:3000/todos/seed",
    [{
      "title": "bunny poo",
      "completed": true,
    },
    {
      "title": "doggy bags needed",
      "completed": false
    }]
  )


  cy
    .visit('localhost:3000');


});

/* 
  👶 challenge #1: create a new todo via request and open the app
  to check that the todo item was requested
*/
it('creates a todo via api', () => {

  cy.contains('bunny poo').should('be.visible')

});

/* 
  👦 challenge #2: create a new todo via request, but make the 
  state of the todo to be completed. you can just use POST /todos
  request to do that. after you open the app, verify that the todo 
  is there and it is completed
*/
it('creates a completed todo item', () => {
  cy.contains('bunny poo').should('be.visible')
  cy.get('.todo').eq(0).should('contain', 'bunny poo').and('have.class', 'completed')

});

/* 
  👨 challenge #3: in README.md, find an api endpoint that
  seeds the database. then write a simple test that verifies 
  that you have seeded the app correctly
*/
it('seeds data before opening the app', () => {

  cy.get('#todo-list').children().should('have.length', 2)

});

/* 
  🤓 challenge #4: create a todo item in the application and then send
  the request to complete that item. to see that item completed, you 
  need to reload the application using .reload() command. the real challenge
  in this test is to find the id of your todo. hint: use .route(), .wait() 
  and .then() command to achieve this.
*/
it.only('deletes created todo item via api', () => {

  // item is created in the before hook 

  // send request to complete the item - we need to find the ID of the item in question 

  // reload the app
  cy.reload()

  //check if the item is completed 
});