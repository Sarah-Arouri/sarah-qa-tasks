import { Before, Given, Then, When  } from "cypress-cucumber-preprocessor/steps";

Given("The user clicks on Campaigns option",()=>{
    cy.wait(5000);
    cy.get(".nav-item").contains("p"," Campaigns").click({force:true});
});
When("Clicks on add a new Campaigns button",()=>{
    cy.get(".btn-primary").first().click();
});
When("Types in the name field",()=>{
    cy.get("#Name").clear().type("sarah");
});
When("Types in the subject field",()=>{
    cy.get("#Subject").clear().type("new");
});
When("Types in the body field",()=>{
    cy.wait(1500);
    cy.get("#Body").clear().type("this is a new campaigns");
});
When("Clicks on save button",()=>{
    cy.get("[name='save']").click();
});
Then("The Campaigns should be added successfully",()=>{
    cy.get(".alert-success").should("contain","The new campaign has been added successfully.");
});
Then("Checked campaigns",()=>{
    cy.get("#campaigns-grid tbody tr").should("contain","sarah");
})