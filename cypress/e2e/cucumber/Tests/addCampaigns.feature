@common-setup
Feature: Add a new Campaign successfully
  The user can add a new Campaigns successfully

# Background: Successful login
#   Given The user navigated to nopCommerce login website
#   When  Enter the user email on email input field
#   And  Enter password on password input field
#   And  Click on log in button
#   Then The user should be redirected to the home page successfully

Background: Successful login
    Given user can login successfully

Scenario: Verify that the user can add new campaigns successfully
  Given The user clicks on Campaigns option
  When Clicks on add a new Campaigns button
  And Types in the name field
  And Types in the subject field
  And Types in the body field
  And Clicks on save button
  Then The Campaigns should be added successfully
