const CHECKOUT_SUMMARY_CONTAINER = '#checkout_summary_container';

export default class CheckoutOverviewPage {
  static isVisible() {
    cy.get(CHECKOUT_SUMMARY_CONTAINER).should('be.visible');
    cy.url().should('be.include', '/checkout-step-two');
  }

  static containProduct(product) {
    cy.get(product).should('be.visible');
  }

  static clickOnFinish() {
    cy.contains('FINISH').click();
  }
}
