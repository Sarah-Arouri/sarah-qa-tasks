@common-setup
Feature: Check add new Discountes

    Verify that the user can add new discounts successfully

     Background: Successful login
      Given user can login successfully


    Scenario: Verify that the user can add new discounts successfully
       Given The user click on discounts option
       When Click on add a new discount button
       And Typed on name field
       And Click on save button
       Then The discounts should be added successfully
       


