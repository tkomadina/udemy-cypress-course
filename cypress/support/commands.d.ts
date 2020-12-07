declare namespace Cypress {
  interface Chainable<Subject> {
    /*
     * adds a new todo item
     * @example
     * cy.addTodo('todo title')
     */
    addTodo(todo: string): Chainable<any>;

    /* 
      challenge hint: copy lines 4 - 9 and rewrite according
      the command you want to add
    */

    /*
     * deletes the first todo item
     * @example
     * cy.deleteTodo()
     */
    deleteTodo(todo: string): Chainable<any>;

    /*
     * checks the todo item by name
     * @example
     * cy.deleteTodo('item name)
     */
    checkTodo(todo: string): Chainable<any>;
  }
}
