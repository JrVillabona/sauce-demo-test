import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import CheckoutInfoPage from '../../../support/page-objects/pages/CheckoutInfoPage';
import CheckoutOverviewPage from '../../../support/page-objects/pages/CheckoutOverviewPage';

When('I complete the info with {string}, {string} and {int}', (fname, lname, postal) => {
  CheckoutInfoPage.fillFirstName(fname);
  CheckoutInfoPage.fillLastName(lname);
  CheckoutInfoPage.fillPostal(postal);
});

When('I complete the info with lastname {string} and {int}', (lname, postal) => {
  CheckoutInfoPage.fillLastName(lname);
  CheckoutInfoPage.fillPostal(postal);
});

When('I complete the info with name {string} and {int}', (fname, postal) => {
  CheckoutInfoPage.fillFirstName(fname);
  CheckoutInfoPage.fillPostal(postal);
});

When('I complete the info with name {string} and lastname {string}', (fname, lname) => {
  CheckoutInfoPage.fillFirstName(fname);
  CheckoutInfoPage.fillLastName(lname);
});

And('I click on continue', () => {
  CheckoutInfoPage.clickOnContinue();
});

Then('I see overview checkout', () => {
  CheckoutOverviewPage.isVisible();
});
