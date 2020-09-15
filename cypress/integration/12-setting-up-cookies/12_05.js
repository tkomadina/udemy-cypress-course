/// <reference types="cypress" />

/* 
  🦸‍♀ challenge #4: there is a setting that can be changed in order to 
  not delete certain cookies between tests. 
  1. read about it in a documentation: https://on.cypress.io/cookies
  2. try test if it works in following describe block:
*/
describe('storing cookies between tests', () => {

    beforeEach(() => {

        cy
            .request('POST', 'localhost:3000/accounts/seed', [
                {
                    'email': 'admin@udemy-cypress-course.com',
                    'password': 'admin'
                }
            ]);

        Cypress.Cookies.preserveOnce('auth', 'true')

    });

    it('logs a user in', () => {

        cy
            .visit('localhost:3000/login');

        cy
            .get('[type=\'email\']')
            .type('admin@udemy-cypress-course.com');

        cy
            .get('[type=\'password\']')
            .type('admin');

        cy
            .get('.login-button')
            .click();

    });

    it('has auth cookie stored', () => {

        cy
            .getCookie('auth')
            .its('value')
            .should('eq', 'true');

    });

});