const HEADER_CONTAINER = '#header_container';
const MENU = '//button[contains(.,"Open Menu")]';
const SHOPPING_CART = '#shopping_cart_container';
const CART_COUNTER = '.fa-layers-counter';

export default class Header {
  static isVisible() {
    cy.get(HEADER_CONTAINER).should('be.visible');
  }

  static clickOnMenu() {
    cy.xpath(MENU).click();
  }

  static clickOnCart() {
    cy.get(SHOPPING_CART).click();
  }

  static visibleCounter(number) {
    cy.get(CART_COUNTER).should('have.text', number);
  }
}
