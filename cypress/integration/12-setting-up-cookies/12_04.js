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
  🤓 challenge #4: try to store your own cookie. have some fun with it 
  and play around with different properties. make sure you’ll check out
  the docs: https://on.cypress.io/setcookie
*/
it('authenticates by storing cookie in browser', () => {

    cy.getCookies().should('be.empty')
    cy.setCookie('session_id', '189jd09sufh33aaiidhf99d09')
    cy.getCookie('session_id').should('have.property', 'value', '189jd09sufh33aaiidhf99d09')

    // cy.setCookie('auth', 'true')
    // cy
    //     .visit('localhost:3000');

    // cy
    //     .get('#loginMessage')
    //     .should('be.visible')
    //     .should('contain.text', 'User is logged in');

    // cy.getCookie('auth')
    //     .should('have.property', "value", "true")

    // cy
    //     .getCookie('auth')
    //     .its('value')
    //     .should('eq', 'true');
});
