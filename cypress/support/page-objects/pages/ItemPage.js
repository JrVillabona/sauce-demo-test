const ITEM_CONTAINER = '#inventory_item_container';
const BACK = '.inventory_details_back_button';

export default class ItemPage {
  static isVisible() {
    cy.get(ITEM_CONTAINER).should('be.visible');
    cy.url().should('be.include', '/inventory-item');
  }

  static clickOnBack() {
    cy.get(BACK).click();
  }

  static addItem() {
    cy.contains('ADD TO CART').click();
  }

  static removeItem() {
    cy.contains('REMOVE').click();
  }
}
