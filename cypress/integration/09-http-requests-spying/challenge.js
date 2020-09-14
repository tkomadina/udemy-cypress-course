/// <reference types="cypress" />

/* 
  ⚠️ remember you can run single test by using it.only
  ⚠️ command server() needs to be called before route() command
  ⚠️ command route() needs to be called soon enough to be 
  registered. in most situations, you want to register your 
  routes before you open your app. if you called .route() command   
  after you do .visit() you may not be able to catch that 
  GET /todos command soon enough 
  ⚠️ in this challenge, it is good to start each test with 
  0 todo items. it may be annoying at this point, but good news 
  is that in following chapters, we will learn how to reset our 
  app so we always start in the desired state 😎
*/

beforeEach(() => {

  cy.server()
  cy
    .route('GET', '/todos').as('getTodos')
    .route('POST', '/todos').as('postTodos')
    .route('PATCH', '/todos/**').as('change')


  cy
    .visit('localhost:3000');

});

/* 
  👶 challenge #1: create a test that checks that GET /todos 
  returns status 200
*/
it('retreives a list of todo items', () => {
  cy.get('#add-todo').type("new item{enter}")
  cy.get('.destroy').click({ multiple: true, force: true })

  cy.wait("@getTodos")
    .then(getTodos => {
      expect(getTodos.status).to.eq(200)
    })


});

/* 
  👦 challenge #2: create a test that checks that POST /todos 
  returns correct todo text
*/
it('creates a todo item', () => {

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  cy.wait('@postTodos')
    .then(postTodo => {
      expect(postTodo.response.body.title).to.eq("buy milk")
    })

});

/* 
  👨 challenge #3: check POST /todos again, but this time, check
  request body, instead of response body. try to check correct
  text of the todo
*/
it('creates a todo item', () => {

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  cy.wait('@postTodos')
    .then(postTodo => {
      expect(postTodo.request.body.title).to.eq("buy milk")
    })

});

/* 
  🤓 challenge #4: create test that checks a request that is sent 
  when a todo item is completed
*/
it('completes a todo item', () => {

  cy.get('#add-todo').type("new item{enter}")
  cy.get('.destroy').click({ multiple: true, force: true })


  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  cy
    .get('.toggle')
    .click();

  cy.wait("@change")
    .then(todochange => {
      expect(todochange.request.body.completed).to.be.true
    })


});

/* 
  🦸‍♂️ challenge #5: create two todos in your app and wait for both
  POST /todos requests to happen. use one .wait() command to test
  them both. example on how to do thiw can be found in documentation:
  https://on.cypress.io/wait#You-can-pass-an-array-of-aliases-that-will-be-waited-on-before-resolving
*/
it.only('completes a todo item', () => {

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  cy
    .get('.new-todo')
    .type('wash dishes{enter}');

  cy
    .wait(["@postTodos", "@postTodos"])
    .then(todo => {
      expect(todo[0].request.body.title).to.eq("buy milk")
      expect(todo[1].response.body.title).to.eq("wash dishes")
    }); // wait for both requests and make assertions on titles




});

});