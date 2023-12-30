import { Before, Given, Then, When  } from "cypress-cucumber-preprocessor/steps";

    // Given("user can login successfully",()=>{
    //     cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
    //     cy.get("#Email").clear().type("admin@yourstore.com")
    //     cy.get("#Password").clear().type("admin")
    //     cy.get(".login-button").click();
    // });
    
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

       
    
 

 






