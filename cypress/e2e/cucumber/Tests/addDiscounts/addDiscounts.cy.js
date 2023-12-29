import { Before, Given, Then, When  } from "cypress-cucumber-preprocessor/steps";

Given("The user click on discounts option",()=>{
    cy.wait(1500);
    cy.get(".nav-item").contains("Discounts").click({force:true});
    
});

When("Click on add a new discount button",()=>{
    cy.get(".btn-primary").first().click();
});

When("Typed on name field",()=>{
   cy.get("#Name").clear().type("Sarah's Discount");
});


When("Click on save button",()=>{
    cy.wait(1500)
    cy.get("[name='save']").click();
});

Then("The discounts should be added successfully",()=>{
    cy.wait(1500);
    cy.get(".alert-success").should("contain","The new discount has been added successfully.");

})