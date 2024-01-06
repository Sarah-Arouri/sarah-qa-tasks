import { Before, Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import loginPageActions from "../../../../../pageObjects/loginPage/actions.cy";
import loginPageAssertions from "../../../../../pageObjects/loginPage/assertions.cy";
import sharedActions from "../../../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../../../pageObjects/shared/assertions.cy";



    const email = "admin@yourstore.com";
    const password = "admin";
    const url = "https://admin-demo.nopcommerce.com/admin/";
    const value = "Dashboard";

    const loginAction = new loginPageActions;
    const loginAssertion = new loginPageAssertions;
    const sharedAction = new sharedActions;
    const sharedAssertion = new sharedAssertions;


    Given("The user navigated to nopCommerce login website",()=>{
        sharedAction.openNopCommerceWebsite();
    });

    When("Enter the user email on email input field",()=>{
        loginAction.typeInEmailInputField(email);
    });

    When("Enter password on password input field",()=>{
        loginAction.typeInPasswordInputField(password);
    })

    When("Click on log in button",()=>{
        loginAction.clickOnLogInButton();
    });

    Then("The user should be redirected to the home page successfully",()=>{
        sharedAssertion.checkURLEqualValue(url);
        loginAssertion.checkContainValue(value);
        
    })

       
    
 

 






