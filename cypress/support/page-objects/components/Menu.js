const MENU_CONTAINER = '.bm-menu';
const LOGOUT = '#logout_sidebar_link';
const RESET_APP = '#reset_sidebar_link';

export default class Menu {
  static isVisible() {
    cy.get(MENU_CONTAINER).should('be.visible');
  }
  static clickOnLogout() {
    cy.get(LOGOUT).click();
  }

  static clickOnResetApp() {
    cy.get(RESET_APP).click();
  }
}
