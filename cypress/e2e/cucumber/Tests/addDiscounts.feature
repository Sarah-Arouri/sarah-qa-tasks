@common-setup
Feature: Check add new Discountes

    Verify that the user can add new discounts successfully

   
    Background: Successful login
        Given The user navigated to nopCommerce login website
        When  Enter the user email on email input field
        And  Enter password on password input field
        And  Click on log in button
        Then The user should be redirected to the home page successfully


    Scenario: Verify that the user can add new discounts successfully
       Given The user click on discounts option
       When Click on add a new discount button
       And Typed on name field
       And Typed on Discount type
       And Checks on use percentage
       And Typed on Discount percentage
       And Click on save button
       Then The discounts should be added successfully
       When Typed on Discounts name
       And Selects Discount type
       And Clicked on Search button
       Then Checked if the discount is exist
       


