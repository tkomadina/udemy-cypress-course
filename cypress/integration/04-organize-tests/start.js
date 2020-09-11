/// <reference types="cypress" />

before(() => {
    cy.visit('localhost:3000');
})

describe('Group 1', () => {
    it('Test one', () => {

    });

    it('Test two', () => {

    });

})

describe('Group 2', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    it('Test one', () => {

    });

    it('Test two', () => {

    });

})