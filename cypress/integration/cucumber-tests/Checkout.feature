Feature: Checkout

  As an Performance Glitch User
  I want to complete the info checkout
  In order to purchase items correctly

  Background:
    Given I am on the cart page
    And I go to checkout info form

  Scenario: Complete the checkout information
    When I complete the info with "Viktor", "Starkov" and 23012
    And I click on continue
    Then I see overview checkout

  Scenario: First Name is required
    When I complete the info with lastname "Starkov" and 23012
    And I click on continue
    Then I see a error message "Error: First Name is required"

  Scenario: Last Name is required
    When I complete the info with name "Viktor" and 23012
    And I click on continue
    Then I see a error message "Error: Last Name is required"

  Scenario: Postal Code is required
    When I complete the info with name "Viktor" and lastname "Starkov"
    And I click on continue
    Then I see a error message "Error: Postal Code is required"

