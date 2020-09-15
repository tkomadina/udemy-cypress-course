/// <reference types="cypress" />

/* 
  ⚠️ most of the work on this challenge will take place in 
  beforeEach() hook. you need to call .server() and .route() 
  commands before you open your app, or more precisely - before 
  the request you want to route occurs. in case of GET /todos
  request, it is at the moment of opening our application
*/

beforeEach(() => {
  cy.server()

  cy.route({
    method: 'POST',
    url: '/todos',
    response: { completed: true }
  }).as('completed')


  cy
    .visit('localhost:3000');

});

/* 
  👶 challenge #1: stub GET /todos request to return 0 items. 
  you can do that manually or using a fixture
*/
it('has 0 todo items', () => {


  // case 1
  // cy.route({
  //   method: 'GET',
  //   url: '/todos',
  //   response: []
  // }).as('emptyList')


  cy.wait("@emptyList")

  cy.get('.todo').should('have.length', 0)
});

/* 
  👧 challenge #2: create your own fixture and use it in your 
  test. try to include a compled todo item too
*/
it('has n todo items (loaded from fixture)', () => {
  cy.wait('@testList')

  cy.get('.todo').should('have.length', 4)
});

/* 
  👩 challenge #3: recreate the scenario from video and write a test
  that will check error message when server returns error with status
  code 500
*/
it('shows error when adding new item', () => {

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  cy.wait('@errorList')
  cy.get('#errorMessage')
    .should('have.text', 'Sorry. There was an error creating todo item.')
    .should('be.visible')

});

/* 
  🤓 challenge #4: manipulate the POST /todos request in such a way that 
  it will create a completed todo item instead of incomplete one
*/
it.only('creates completed todo item', () => {

  cy
    .get('.new-todo')
    .type('body item{enter}');

  cy.wait('@completed')

});