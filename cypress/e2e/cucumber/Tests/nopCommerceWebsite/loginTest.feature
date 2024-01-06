@common-setup
Feature: Login functionality

    The user can be able to login successfully

    Scenario: The user can login successfully
      Given The user navigated to nopCommerce login website
      When  Enter the user email on email input field
      And  Enter password on password input field
      And  Click on log in button
      Then The user should be redirected to the home page successfully