describe("task4",()=>{
    it("tests",()=>{
        cy.visit("https://magento.softwaretestingboard.com");
        cy.get("#search").type("Shirt{enter}");
        //cy.contains("a","Radiant Tee").click();
        //cy.wait("6000");
        cy.get("[class='product-image-container']:eq(0)").click();
        cy.wait(5000);
        //cy.get("[option-tooltip-value='M']").click();
        cy.get("[option-label='M']").click();
        //cy.get("[option-label='Purple']").click();
        cy.get(".swatch-attribute-options .color:last-child").click();
        cy.get("[id='product-addtocart-button']").click();
        cy.get(".success").should("contain","You added Radiant Tee to your ");
        cy.get(".showcart").should("have.text","1")
        
    })
})