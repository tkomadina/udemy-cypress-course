beforeEach(() => {
    cy.server()
    cy.route('/todos', [])
    cy.route({
        method: 'POST',
        url: '/todos'
    }).as('created')
    cy.visit('localhost:3000')

});


it('deletes created todo item via api', () => {

    cy
        .get('input')
        .eq(0)
        .type('test item{enter}');

    cy.wait('@created').then((item) => {

        cy.log(item.response.body.id)
        cy.request('PATCH', `localhost:3000/todos/${item.response.body.id}`, { completed: true })


    })

    cy.get('.todo').should('have.class', 'completed')


});