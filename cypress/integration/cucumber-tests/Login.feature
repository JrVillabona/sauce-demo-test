Feature: Login

  As an  User
  I want to login in Sauce Demo
  In order to buy items

  Background: Go to the index
    Given I go to the login page

  Scenario: Login with a Standard User
    And I enter the "standard_user" credentials
    When I click on the login button
    Then I am in the inventory

  Scenario: Login with a Locked Out User
    And I enter the "locked_out_user" credentials
    When I click on the login button
    Then I see the locked user message

  Scenario: Login with a problem user
    And I enter the "problem_user" credentials
    When I click on the login button
    Then I can not see the images correctly

  Scenario: Login with a performace user
    And I enter the "performance_glitch_user" credentials
    When I click on the login button
    Then I am in the inventory