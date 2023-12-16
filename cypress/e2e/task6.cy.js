/// <reference types="cypress" />

describe("Practices",()=>{
    it("Task6",()=>{
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
        const email="admin@yourstore.com";
        const password = "admin";
        cy.login(email,password);
        cy.get("#nopSideBarPusher").click();
        cy.get(".nav-sidebar > li:nth-child(2) > a").click();
        cy.wait(500);
        cy.contains("Products").click({force:true});
        //search for new items every time to make sure tp pass test(Android)
        cy.get("#SearchProductName").type("Beats");
        cy.get("[id=search-products]").click();
        cy.wait(1000)
        cy.get("#products-grid tbody tr").find("input[name=checkbox_products]").click({multiple:true});
         cy.get("#delete-selected").click();
         cy.wait(1000)
         cy.get("[type=submit]").contains("Yes").click();
         cy.wait(1000)
         cy.get(".dataTables_empty").should("contain","No data available in table");


    })
})