/// <reference types="cypress" />
describe("Creating an account",()=>{
    it("Create Account Field",()=>{
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
        cy.get("#firstname").should("be.visible");
        cy.get("#lastname").should("be.visible");
        cy.get("#email_address").should("be.visible");
        cy.get("#password").should("be.visible");
        cy.get("[name='password_confirmation']").should("be.visible");
        cy.get("[class='action submit primary']").should("be.visible").and("be.enabled");
     })

     it.only("Happy Scenario",()=>{
      cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
      cy.get("#firstname").type("hd4d1wpw1iff");
      cy.get("#lastname").type("bdk411www1fff");
      cy.get("#email_address").type("h11j1dd4wwwu12@gmail.com");
      cy.get("#password").type("jojo!123");
      cy.get("[name='password_confirmation']").type("jojo!123");
      cy.get("[class='action submit primary']").click({ multiple: true });
      cy.wait(2000);
      cy.get(".messages [data-bind]").last().should("have.text","Thank you for registering with Main Website Store.");
       })
        


     })
