/// <reference types="cypress" />

beforeEach(() => {

    cy
        .request('POST', 'localhost:3000/accounts/seed', [
            {
                'email': 'admin@udemy-cypress-course.com',
                'password': 'admin'
            }
        ]);

});

/* 
  👧 challenge #2: test some other properties of saved cookie, like 
  location, path, etc.
*/
it('has correct auth cookie properties', () => {

    cy.visit('localhost:3000/login');

    cy.get('[type=\'email\']')
        .type('admin@udemy-cypress-course.com');

    cy.get('[type=\'password\']')
        .type('admin');

    cy.get('.login-button')
        .click();

    // cy.getCookies() yields an array of cookies
    cy.getCookies().should('have.length', 1).should((cookies) => {
        // each cookie has these properties
        expect(cookies[0]).to.have.property('name', 'auth')
        expect(cookies[0]).to.have.property('value', 'true')
        expect(cookies[0]).to.have.property('httpOnly', false)
        expect(cookies[0]).to.have.property('secure', false)
        expect(cookies[0]).to.have.property('domain', 'localhost')
        expect(cookies[0]).to.have.property('path', '/')
    })









    cy.getCookie('auth')
        .should('have.property', "value", "true")

    // cy
    //     .getCookie('auth')
    //     .its('value')
    //     .should('eq', 'true');



});
