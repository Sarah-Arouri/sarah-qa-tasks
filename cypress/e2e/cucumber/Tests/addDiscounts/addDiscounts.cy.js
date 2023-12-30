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

When ("Typed on Discount type",()=>{
    cy.get("#DiscountTypeId").select("Assigned to order total");
})

When("Checks on use percentage",()=>{
    cy.get("#UsePercentage").check();
})

When("Typed on Discount percentage",()=>{
    cy.get("#DiscountPercentage").type(10,{force:true});
})

When("Click on save button",()=>{
    cy.wait(1500)
    cy.get("[name='save']").click();
});

Then("The discounts should be added successfully",()=>{
    cy.wait(1500);
    cy.get(".alert-success").should("contain","The new discount has been added successfully.");
})

When("Typed on Discounts name",()=>{
    cy.get("#SearchDiscountName").type("Sarah's Discount");
})

When("Selects Discount type",()=>{
    cy.get("#SearchDiscountTypeId").select("Assigned to order total");
})

When("Clicked on Search button",()=>{
    cy.get("#search-discounts").click();
})

Then("Checked if the discount is exist",()=>{
    cy.wait(1500);
    cy.get("#discounts-grid tbody tr td").should("contain","Sarah's Discount")
})