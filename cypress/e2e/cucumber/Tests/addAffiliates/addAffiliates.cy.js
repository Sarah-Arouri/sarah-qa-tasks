import { Before, Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
Before(()=>{
    Given("The user navigated to nopCommerce login website",()=>{
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
    });

    When("Enter the user email on email input field",()=>{
        cy.get("#Email").clear().type("admin@yourstore.com")
    });

    When("Enter password on password input field",()=>{
        cy.get("#Password").clear().type("admin")
    })

    When("Click on log in button",()=>{
        cy.get(".login-button").click();
    });

    Then("The user should be redirected to the home page successfully",()=>{
        cy.url("eq","https://admin-demo.nopcommerce.com/admin/")
        cy.get(".content-header").should("contain","Dashboard")
    })
})

Given("The user click on Affiliates option",()=>{
    cy.get(".nav-item").contains("Affiliates").click({force:true});
});
When("Click on add a new Affiliates button",()=>{
    cy.get(".btn-primary").first().click();
    cy.wait(1500);
});
When("Typed on first name field",()=>{
    cy.get("#Address_FirstName").clear().type("sarah");
});
When("Typed on last name field",()=>{
    cy.get("#Address_LastName").clear().type("arouri");
});
When("Typed on email field",()=>{
    cy.get("#Address_Email").clear().type("h11j1dd4wwwu12@gmail.com");
});
When("Typed on country id field",()=>{
    cy.get("#Address_CountryId").select("Palestine");
});
When("Typed on country field",()=>{
    cy.get("#Address_County").clear().type("Palestine");
});
When("Typed on city field",()=>{
    cy.get("#Address_City").clear().type("Ramallah");
});
When("Typed on address field",()=>{
    cy.get("#Address_Address1").clear().type("Ramallah");
});
When("Typed on zip postal code field",()=>{
    cy.wait(1500);
    cy.get("#Address_ZipPostalCode").clear().type(12356);
});
When("Typed on phone number field",()=>{
    cy.get("#Address_PhoneNumber").clear().type("0591234567");
});
When("Click on save button",()=>{
    cy.wait(1500);
    cy.get("[name='save']").click({force:true});
});
Then("The Affiliates should be added successfully",()=>{
    cy.get(".alert-success").should("contain","The new affiliate has been added successfully.")
});
