const USERNAME = '#user-name';
const PASSWORD = '#password';
const LOGIN_BUTTON = '.btn_action';
const LOGIN_CONTAINER = '#login_button_container';
const LOCKED_USER = '[data-test=error]';

export default class LoginPage {
  static visit() {
    cy.visit('/index.html');
    this.isVisible();
  }

  static isVisible() {
    cy.get(LOGIN_CONTAINER).should('be.visible');
    cy.url().should('be.include', '/index');
  }

  static enterUsername(username) {
    cy.get(USERNAME).type(username);
  }

  static enterPassword(password) {
    cy.get(PASSWORD).type(password);
  }

  static clickOnLoginButton() {
    cy.get(LOGIN_BUTTON).click();
  }

  static messageLockedIsVisible() {
    cy.get(LOCKED_USER).should('be.visible');
  }
}
