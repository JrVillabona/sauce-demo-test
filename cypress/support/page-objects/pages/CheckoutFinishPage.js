const COMPLETE_CONTAINER = '.checkout_complete_container';
const COMPLETE_HEADER = '.complete-header';
const COMPLETE_TEXT = '.complete-text';
const PONY_EXPRESS = '.pony_express';

export default class CheckoutFinishPage {
  static isVisible() {
    cy.get(COMPLETE_CONTAINER).should('be.visible');
    cy.url().should('be.include', '/checkout-complete');
  }

  static completeHeaderIsVisible() {
    cy.get(COMPLETE_HEADER).should('be.visible');
  }

  static completeHeaderValidText(header) {
    cy.get(COMPLETE_HEADER).should('have.text', header);
  }

  static completeTextIsVisible() {
    cy.get(COMPLETE_TEXT).should('be.visible');
  }

  static completeMessageValidText(message) {
    cy.get(COMPLETE_TEXT).should('have.text', message);
  }

  static ponyExpressIsVisible() {
    cy.get(PONY_EXPRESS).should('be.visible');
  }
}
