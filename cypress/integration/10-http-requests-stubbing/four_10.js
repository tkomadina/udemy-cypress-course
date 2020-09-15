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
        response: {
            completed: true,
            id: "2304173619",
            title: "order dinner"
        }
    }).as('completed')

    cy
        .visit('localhost:3000');

});

/* 
  🤓 challenge #4: manipulate the POST /todos request in such a way that 
  it will create a completed todo item instead of incomplete one
*/
it.only('creates completed todo item', () => {

    cy
        .get('.new-todo')
        .type('order dinner{enter}');

    cy.wait('@completed')



});