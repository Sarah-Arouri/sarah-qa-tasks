import { Before, Given, Then, When  } from "cypress-cucumber-preprocessor/steps";

Given("The user click on campagens option",()=>{
    cy.get(".nav-item").contains("Campaigns").click({force:true});
});
When("Click on add a new campagens button",()=>{
    cy.get(".btn-primary").first().click();
});
When("Typed on name field",()=>{
    cy.get("#Name").clear().type("sarah");
});
When("Typed on subject field",()=>{
    cy.get("#Subject").clear().type("new");
});
When("Typed on body field",()=>{
    cy.wait(1500);
    cy.get("#Body").clear().type("this is a new campaigns");
});
When(" Click on save button",()=>{
    cy.get("[name='save']").click();
});
Then("The discounts should be added successfully",()=>{
    cy.get(".alert-success").should("contain","The new campaign has been added successfully.");
});