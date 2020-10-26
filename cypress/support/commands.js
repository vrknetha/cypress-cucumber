/// <reference types="Cypress" />

Cypress.Commands.add(`getDataAutoId`, (value) => {
  return cy.get(`[data-auto-id="${value}"]`);
});

Cypress.Commands.add(`selectSortOption`, (value) => {
  switch (value.toLowerCase().trim()) {
    case `relevance`:
      cy.getDataAutoId(`radio-button-relevance`)
        .find(`input`)
        .check({ force: true });
      break;
    case `price`:
      cy.getDataAutoId(`radio-button-price`)
        .find(`input`)
        .check({ force: true });
      break;
    case `sugar`:
      cy.getDataAutoId(`radio-button-sugar`)
        .find(`input`)
        .check({ force: true });
      break;
    case `salt`:
      cy.getDataAutoId(`radio-button-salt`)
        .find(`input`)
        .check({ force: true });
      break;
    case `fat`:
      cy.getDataAutoId(`radio-button-fat`).find(`input`).check({ force: true });
      break;
    case `carbohydrate`:
      cy.getDataAutoId(`radio-button-carbohydrate`)
        .find(`input`)
        .check({ force: true });
      break;
    case `protein`:
      cy.getDataAutoId(`radio-button-protein`)
        .find(`input`)
        .check({ force: true });
      break;
    case `fibre`:
      cy.getDataAutoId(`radio-button-fibre`)
        .find(`input`)
        .check({ force: true });
      break;
    case `energy`:
      cy.getDataAutoId(`radio-button-energy`)
        .find(`input`)
        .check({ force: true });
      break;
    case `saturatedfat`:
      cy.get(`radio-button-saturatedfat`).find(`input`).check({ force: true });
      break;
    default:
      cy.getDataAutoId(`radio-button-relevance`)
        .find(`input`)
        .check({ force: true });
      break;
  }
});

Cypress.Commands.add(`selectSortBy`, (value) => {
  value = value.toLowerCase().split(" ").join("");
  switch (value) {
    case `lowtohigh`:
      cy.getDataAutoId(`ascOrderByButton`).should(`be.enabled`).click();
      break;
    case `hightolow`:
      cy.getDataAutoId(`descOrderByButton`).should(`be.enabled`).click();
      break;
    default:
      throw new Error(`Unknown step`, value);
  }
});

Cypress.Commands.add(`login`, (email, pass) => {
  return cy
    .get(`.email-phone-input `)
    .type(email)
    .get(`.show-password`)
    .type(pass)
    .get(`[type="submit"]`)
    .click();
});
