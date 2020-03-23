import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../support/page-objects/pages/LoginPage';
import InventoryPage from '../../../support/page-objects/pages/InventoryPage';

When('I click on the login button', () => {
  LoginPage.clickOnLoginButton();
});

Then('I am in the inventory', () => {
  InventoryPage.isVisible();
});

Then('I see the locked user message', () => {
  LoginPage.messageLockedIsVisible();
});

Then('I can not see the images correctly', () => {
  InventoryPage.imageIsNotVisible();
});
