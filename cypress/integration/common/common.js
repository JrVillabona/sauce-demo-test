import { Before, defineStep } from 'cypress-cucumber-preprocessor/steps';
import InventoryPage from '../../support/page-objects/pages/InventoryPage';
import CartPage from '../../support/page-objects/pages/CartPage';
import LoginPage from '../../support/page-objects/pages/LoginPage';
import ItemPage from '../../support/page-objects/pages/ItemPage';
import CheckoutInfoPage from '../../support/page-objects/pages/CheckoutInfoPage';
import Header from '../../support/page-objects/components/Header';
import Menu from '../../support/page-objects/components/Menu';

Before({ tags: '@clearData' }, () => {
  LoginPage.visit();
  LoginPage.enterUsername('performance_glitch_user');
  LoginPage.enterPassword('secret_sauce');
  LoginPage.clickOnLoginButton();
  Header.isVisible();
  Header.clickOnMenu();
  Menu.isVisible();
  Menu.clickOnResetApp();
});

defineStep('I go to the login page', () => {
  LoginPage.visit();
  LoginPage.isVisible();
});

defineStep('I am on the inventary page', () => {
  LoginPage.visit();
  LoginPage.enterUsername('performance_glitch_user');
  LoginPage.enterPassword('secret_sauce');
  LoginPage.clickOnLoginButton();
  InventoryPage.isVisible();
});

defineStep('I am on the cart page', () => {
  LoginPage.visit();
  LoginPage.enterUsername('performance_glitch_user');
  LoginPage.enterPassword('secret_sauce');
  LoginPage.clickOnLoginButton();
  InventoryPage.isVisible();
  Header.clickOnCart();
});

defineStep('I logout', () => {
  Header.isVisible();
  Header.clickOnMenu();
  Menu.isVisible();
  Menu.clickOnLogout();
});

defineStep('I am logged with {string}', user => {
  LoginPage.enterUsername(user);
  LoginPage.enterPassword('secret_sauce');
  LoginPage.clickOnLoginButton();
  InventoryPage.isVisible();
});

defineStep('I enter the {string} credentials', user => {
  LoginPage.enterUsername(user);
  LoginPage.enterPassword('secret_sauce');
});

defineStep('I am on the login page', () => {
  LoginPage.isVisible();
});

defineStep('I go to the cart shopping', () => {
  Header.clickOnCart();
  CartPage.isVisible();
});

defineStep('I add {string}', product => {
  InventoryPage.clickOnProduct(product);
  ItemPage.isVisible();
  ItemPage.addItem();
  ItemPage.clickOnBack();
});

defineStep('I see that {string} has been added', product => {
  CartPage.productIsAdded(product);
});

defineStep('I go to checkout info form', () => {
  CartPage.clickOnCheckOut();
  CheckoutInfoPage.isVisible();
});

defineStep('I see a error message {string}', errorMessage => {
  CheckoutInfoPage.validateErrorMessage(errorMessage);
});

defineStep('I click on continue', () => {
  CheckoutInfoPage.clickOnContinue();
});
