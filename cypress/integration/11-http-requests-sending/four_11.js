beforeEach(() => {
    cy.server()

    cy.route({
        method: 'POST',
        url: '/todos'
    }).as('created')

    cy.visit('localhost:3000')
});


it('deletes created todo item via api', () => {
    //   create a todo item in the application 
    cy
        .get('input')
        .eq(0)
        .type('birthday gifts{enter}');

    //   and then send the request to complete that item. 
    // the real challenge in this test is to find the id of your todo. hint: use .route(), .wait() and .then() command to achieve this.

    cy
        .wait('@created')
        .then((item) => {
            cy.log(item.responseBody.id)
            cy
                .get('.todo')
                .request('PATCH', `localhost:3000/todos/${item.responseBody.id}`, { completed: true })
        })
    // to see that item completed, you need to reload the application using .reload() command.
    cy.reload()

    cy.get('.todo').should('have.class', 'completed')


});