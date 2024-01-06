import { Before, Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import addAffiliatesActions from "../../../../../pageObjects/addAffiliatesPage/actions.cy";
import addAffiliatesAssertions from "../../../../../pageObjects/addAffiliatesPage/assertions.cy";

const firstName = "sarah";
const lastName = "arouri";
const email = "h11j1dd4wwwu12@gmail.com";
const message = "The new affiliate has been added successfully.";

const addaffiliatesAction = new addAffiliatesActions;
const addaffiliatesAssertion = new addAffiliatesAssertions;

Given("The user click on Affiliates option",()=>{
    addaffiliatesAction.clickedOnAffliatesOption();
});
When("Click on add a new Affiliates button",()=>{ 
    addaffiliatesAction.clickedOnAffiliatesButton();
});
When("Typed on first name field",()=>{
    addaffiliatesAction.typedInFirstNameField(firstName);
});
When("Typed on last name field",()=>{
    addaffiliatesAction.typedInLastNameField(lastName);
});
When("Typed on email field",()=>{
    addaffiliatesAction.typedInEmailField(email);
});
When("Typed on country id field",()=>{
    addaffiliatesAction.typeDInCountryIdField();
});
When("Typed on country field",()=>{
    addaffiliatesAction.typedInCountryField();
});
When("Typed on city field",()=>{
    addaffiliatesAction.typedInCityField();
});
When("Typed on address field",()=>{
    addaffiliatesAction.typedInAddressField();
});
When("Typed on zip postal code field",()=>{
    addaffiliatesAction.typedInPostalCodeFeild();
});
When("Typed on phone number field",()=>{
    addaffiliatesAction.typedInPhoneNumberField();
});
When("Click on save button",()=>{
    addaffiliatesAction.clickedOnSaveButton();
});
Then("The Affiliates should be added successfully",()=>{
    cy.get(".alert-success").should("contain",message)
});
When("Typed on First name",()=>{
    addaffiliatesAction.typedInTableFirstName(firstName);
});
When("Typed on last name",()=>{
    addaffiliatesAction.typedInTableLastName(lastName);
});
When("Clicked on search button",()=>{
   addaffiliatesAction.clickedOnSearchButton()
})
Then("Checked the affiliates",()=>{
    addaffiliatesAssertion.checkedTheAffiliates(lastName);
})
