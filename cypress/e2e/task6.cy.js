/// <reference types="cypress" />

describe("Practices",()=>{
    before(()=>{
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
       const email="admin@yourstore.com";
       const password = "admin";
       cy.login(email,password);
       cy.get("#nopSideBarPusher").click();
       cy.get(".nav-sidebar > li:nth-child(2) > a").click();
       cy.wait(500);
       cy.contains("Products").click({force:true});

       for (let i = 0; i < 2; i++) {
        cy.contains("Add new").click();
        cy.get("#Name").type("camera",{force:true});
        cy.get(".fa-minus").first().click();
        cy.wait(3000);
        cy.get("#Price").last().clear({force:true}).type(3000,{force:true});
        cy.wait(1500);
        cy.get("#product-info").find(".fa-plus").parent().click();
        cy.get("[name=save]").click();
       }
    //    cy.contains("Add new").click();
    //    cy.get("#Name").type("camera",{force:true});
    //     cy.get(".fa-minus").first().click();
        // cy.wait(3000);
        // cy.get("#Price").last().clear({force:true}).type(3000,{force:true});
        // cy.wait(1500);
        // cy.get("#product-info").find(".fa-plus").parent().click();
        // cy.get("[name=save]").click();
        cy.get(".alert-success").should("contain","The new product has been added successfully");
        cy.get("[id=search-products]").click();
        cy.get("#SearchProductName").type("camera");
        cy.get("[id=search-products]").click();
        cy.wait(1500);

    })
    it("Task6",()=>{
         cy.contains("Products").click({force:true});
        //search for new items every time to make sure to pass the test(Android)
        cy.get("#SearchProductName").type("camera");
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