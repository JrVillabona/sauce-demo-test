Feature: Purchase

  As an Performance Glitch User
  I want to add items to cart
  In order to purchase items

  Background:
    Given I am on the inventary page

  @clearData
  Scenario: Buy two products E2E
    Given I add two products to cart
    And I go to the cart shopping
    And I go to checkout info form
    When I complete the checkout proccess
    Then I should see the checkout completed
    And I see the header text "THANK YOU FOR YOUR ORDER"

  @clearData
  Scenario: Add and remove an item from the cart
    Given I add two products to cart
    And I go to the cart shopping
    When I remove "Sauce Labs Onesie"
    Then I should not see the "Sauce Labs Onesie"

  @clearData
  Scenario: Verify the product labels in the cart info
    Given I add "Sauce Labs Onesie"
    And I add "Sauce Labs Bike Light"
    When I go to the cart shopping
    Then I see that "Sauce Labs Onesie" has been added
    And I see that "Sauce Labs Bike Light" has been added