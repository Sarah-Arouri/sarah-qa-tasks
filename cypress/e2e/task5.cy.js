/// <reference types="cypress" />
describe("Creating an account",()=>{
    it("Create Account Field",()=>{
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
        cy.get(".logo").should("be.visible");
        cy.get("#search").should("be.visible");
        cy.get(".showcart").should("be.visible");
        cy.get(".counter").first().should("be.hidden");
        cy.get(".navigation").should("be.visible");
        cy.get(".base").should("have.text","Create New Customer Account");
        cy.get(".legend").first().should("have.text","Personal Information");
        cy.get("#firstname").should("be.empty").and("be.visible");
        cy.get("#lastname").should("be.empty").and("be.visible");
        cy.get(".legend").last().should("have.text","Sign-in Information").and("be.visible");
        cy.get("#email_address").should("be.empty").and("be.visible");
        cy.get("#password").should("be.empty").and("be.visible");
        cy.get("[name='password_confirmation']").should("be.empty").and("be.visible");
        cy.get("[class='action submit primary']").should("be.visible").and("be.enabled");
     })

     it("Happy Scenario",()=>{
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
        cy.get("#firstname").type("Sarah{enter}");
        cy.get("#lastname").type("Arouri{enter}");
        cy.get("#email_address").type("sarah.arouri.2018@gmail.com{enter}");
        cy.get("#password").type("sarah!123{enter}");
        cy.get("[name='password_confirmation']").type("sarah!123{enter}");
        cy.get("[class='action submit primary']").click();
        


     })
})