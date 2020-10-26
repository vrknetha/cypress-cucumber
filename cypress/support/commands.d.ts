declare namespace Cypress {
  interface Chainable<Subject> {
    getDataAutoId(value: string): Chainable<Element>;

    selectSortOption(value: string): Chainable<void>;

    selectSortBy(value: string): Chainable<void>;

    login(email: string, pass: string): Chainable<void>;
  }
}
