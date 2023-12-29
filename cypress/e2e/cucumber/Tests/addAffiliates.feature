@common-setup
Feature: Add a new Affiliates successfully
  The user can add a new Affiliates successfully

Background: Successful login
    Given user can login successfully

  Scenario: Verify that the user can add new Affiliates successfully
       Given The user click on Affiliates option
       When Click on add a new Affiliates button
       And Typed on first name field
       And Typed on last name field
       And Typed on email field
       And Typed on country id field
       And Typed on country field
       And Typed on city field
       And Typed on address field
       And Typed on zip postal code field
       And Typed on phone number field
       And Click on save button
       Then The Affiliates should be added successfully