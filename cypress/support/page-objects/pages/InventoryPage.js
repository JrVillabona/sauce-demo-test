const INVENTORY_CONTAINER = '#inventory_container';
const IMAGE_ITEM = '#item_4_img_link';
const SAUCE_BIKE = ':nth-child(2) > .pricebar > .btn_primary';
const SAUCE_ONESIE = ':nth-child(5) > .pricebar > .btn_primary';

export default class InventoryPage {
  static isVisible() {
    cy.get(INVENTORY_CONTAINER).should('be.visible');
    cy.url().should('be.include', '/inventory');
  }

  static clickOnProduct(item) {
    cy.xpath(`//div[@class='inventory_item_name'][contains(.,"${item}")]`).click();
  }

  static imageIsNotVisible() {
    cy.get(IMAGE_ITEM).should('not.be.visible');
  }

  static addSauceBike() {
    cy.get(SAUCE_BIKE).click();
  }

  static addSauceOnesie() {
    cy.get(SAUCE_ONESIE).click();
  }
}
