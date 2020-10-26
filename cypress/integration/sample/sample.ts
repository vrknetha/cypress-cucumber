// tslint:disable-next-line:no-submodule-imports
import {
  Given,
  Before,
  And,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit("/", { timeout: 10000 });
  cy.get(`[title="Accept Cookies"]`).click();
  cy.getDataAutoId(`btnSign`).click();
  cy.login(`manjeet.khalsa@yahoo.com`, `99999999`);
  cy.getCookies().then((cookies: any) => {
    Cypress.Cookies.defaults({
      // @ts-ignore
      preserve: cookies.map((cookie) => cookie.name),
    });
  });
});

Given("I am on Asda groceries home page", () => {
  cy.title().should("eq", "Online Food Shopping - ASDA Groceries");
});

And(`I navigate to fruit {string}`, (item) => {
  const menuSelector = `.navigation-menu__text`;
  const itemSelector = `.h-nav__item-text`;
  cy.contains(`.navigation-menu__text`, `Groceries`).click();
  cy.contains(itemSelector, `Fresh Food & Bakery`).trigger(`mouseover`);
  cy.contains(itemSelector, `Fruit`).trigger(`mouseover`);
  cy.contains(itemSelector, item).click();
});

When(
  `I filter by {string} and {string}`,
  (sortType: string, sortBy: string) => {
    cy.getDataAutoId(`sortByFilterButton`).click();
    cy.getDataAutoId(`dropDownMenu`).within(() => {
      cy.selectSortOption(sortType).selectSortBy(sortBy);
    });
    cy.getDataAutoId(`btnApply`).click();
  }
);

And(`I select grapes price range £{string} to £{string}`, (from, to) => {
  const fromFloat = parseFloat(from);
  const toFloat = parseFloat(to);
  cy.get(`.co-product-list__main-cntr`)
    .eq(0)
    .within(() => {
      cy.get(`.co-item `).each((element) => {
        cy.wrap(element).within(() => {
          cy.get(`strong`)
            .invoke(`text`)
            .then((text) => {
              const amount: number = parseFloat(text.replace(`£`, ``));
              if (amount >= fromFloat && amount <= toFloat) {
                cy.getDataAutoId(`btnAdd`).click();
              }
            });
        });
      });
    });
});

Then(`I see below grapes items selected`, (dataTable) => {
  // @ts-ignore
  let cartItems: [string];
  cy.get(`.mini-trolley__product-list`).within(() => {
    cy.getDataAutoId(`linkProductTitle`).each((element) => {
      cy.wrap(element)
        .invoke(`text`)
        .then((text: string) => {
          cartItems.push(text);
        });
    });
  });
  let dataArray: [string];
  dataTable.hashes().forEach((element: any) => {
    dataArray.push(element.item);
  });
  // @ts-ignore
  expect(cartItems.sort()).equal(dataTable.sort());
});
