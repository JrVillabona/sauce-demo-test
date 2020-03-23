import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import InventoryPage from '../../../support/page-objects/pages/InventoryPage';
import CheckoutInfoPage from '../../../support/page-objects/pages/CheckoutInfoPage';
import CheckoutOverviewPage from '../../../support/page-objects/pages/CheckoutOverviewPage';
import CartPage from '../../../support/page-objects/pages/CartPage';
import ItemPage from '../../../support/page-objects/pages/ItemPage';
import CheckoutFinishPage from '../../../support/page-objects/pages/CheckoutFinishPage';

Given('I add two products to cart', () => {
  InventoryPage.addSauceBike();
  InventoryPage.addSauceOnesie();
});

When('I complete the checkout proccess', () => {
  CheckoutInfoPage.fillFirstName('First Name Test');
  CheckoutInfoPage.fillLastName('Last Name Test');
  CheckoutInfoPage.fillPostal('01253');
  CheckoutInfoPage.clickOnContinue();
  CheckoutOverviewPage.isVisible();
  CheckoutOverviewPage.clickOnFinish();
});

Then('I should see the checkout completed', () => {
  CheckoutFinishPage.isVisible();
  CheckoutFinishPage.completeHeaderIsVisible();
  CheckoutFinishPage.completeTextIsVisible();
  CheckoutFinishPage.ponyExpressIsVisible();
});

And('I see the header text {string}', text => {
  CheckoutFinishPage.completeHeaderValidText(text);
});

When('I remove {string}', item => {
  CartPage.clickOnProduct(item);
  ItemPage.isVisible();
  ItemPage.removeItem();
  ItemPage.clickOnBack();
});

Then('I should not see the {string}', product => {
  CartPage.productIsNotAdded(product);
});
