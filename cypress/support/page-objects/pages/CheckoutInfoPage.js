const CHECKOUT_CONTAINER = '#checkout_info_container';
const FIRST_NAME = '[data-test=firstName]';
const LAST_NAME = '[data-test=lastName]';
const POSTAL_CODE = '[data-test=postalCode]';
const ERROR_MESSAGE = '[data-test=error]';

export default class CheckoutInfoPage {
  static isVisible() {
    cy.get(CHECKOUT_CONTAINER).should('be.visible');
    cy.url().should('be.include', '/checkout-step-one');
  }

  static fillFirstName(firstname) {
    cy.get(FIRST_NAME)
      .clear()
      .type(firstname);
  }

  static fillLastName(lastname) {
    cy.get(LAST_NAME)
      .clear()
      .type(lastname);
  }

  static fillPostal(postal) {
    cy.get(POSTAL_CODE)
      .clear()
      .type(postal);
  }

  static clickOnContinue() {
    cy.contains('CONTINUE').click();
  }

  static clickOnCancel() {
    cy.contains('CANCEL').click();
  }

  static validateErrorMessage(message) {
    cy.get(ERROR_MESSAGE).should('have.text', message);
  }
}
