import InventoryPage from './InventoryPage';

const CART_CONTAINER = '#cart_contents_container';
const NAME_ITEM_LIST = '(//div[@class="inventory_item_name"])';

export default class CartPage extends InventoryPage {
  static isVisible() {
    cy.get(CART_CONTAINER).should('be.visible');
    cy.url().should('be.include', '/cart');
  }

  static clickOnCheckOut() {
    cy.contains('CHECKOUT').click();
  }

  static clickOnContinueShopping() {
    cy.contains('CONTINUE SHOPPING').click();
  }

  static productIsAdded(product) {
    cy.xpath(NAME_ITEM_LIST).then($elements => {
      let strings = [...$elements].map($el => $el.textContent.trim());
      cy.wrap(strings).should('be.include', product);
    });
  }

  static productIsNotAdded(product) {
    cy.xpath(NAME_ITEM_LIST).then($elements => {
      let strings = [...$elements].map($el => $el.textContent.trim());
      cy.wrap(strings).should('not.be.include', product);
    });
  }
}
