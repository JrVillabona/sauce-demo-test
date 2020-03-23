Feature: Logout

  As an  User
  I want to logout from Sauce Demo
  In order to close the session

  Background: Go to the index
    Given I go to the login page

  Scenario: Logout with a standard user
    Given I am logged with "standard_user"
    When I logout
    Then I am on the login page

  Scenario: Logout with a problem user
    Given I am logged with "problem_user"
    When I logout
    Then I am on the login page

  Scenario: Logout with a performace user
    Given I am logged with "performance_glitch_user"
    When I logout
    Then I am on the login page