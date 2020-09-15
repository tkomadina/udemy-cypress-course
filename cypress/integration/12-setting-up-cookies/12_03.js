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
  👩 challenge #3: save auth cookie using .setCookie() commandand then
  open the app. check if "logged in" message appears in application
*/
it('authenticates by storing cookie in browser', () => {

    cy.setCookie('auth', 'true')
    cy
        .visit('localhost:3000');

    cy
        .get('#loginMessage')
        .should('be.visible')
        .should('contain.text', 'User is logged in');

    cy.getCookie('auth')
        .should('have.property', "value", "true")

    // cy
    //     .getCookie('auth')
    //     .its('value')
    //     .should('eq', 'true');



});
