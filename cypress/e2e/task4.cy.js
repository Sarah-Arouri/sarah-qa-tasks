describe("task4",()=>{
    it("tests",()=>{
        cy.visit("https://magento.softwaretestingboard.com");
        cy.get("#search").type("Shirt{enter}");
        //cy.contains("a","Radiant Tee").click();
        //cy.wait("6000");
        cy.get("[class='product-image-container']:eq(0)").click();
        cy.get("[option-label='M']").click();
        cy.get("[option-label='Purple']").click();
        cy.get("[id='qty']").clear().type(3);
        cy.get("[id='product-addtocart-button']").click();
        
    })
})