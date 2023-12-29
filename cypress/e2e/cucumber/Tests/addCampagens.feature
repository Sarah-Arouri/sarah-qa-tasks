@common-setup
Feature: Add a new Campagens successfully
  The user can add a new Campagens successfully

Background: Add Campagens functionality
       Given The user can be able to add Campagens successfully

       Scenario: Verify that the user can add new campagens successfully
       Given The user click on campagens option
       When Click on add a new campagens button
       And Typed on name field
       And Typed on subject field
       And Typed on body field
       And Click on save button
       Then The discounts should be added successfully