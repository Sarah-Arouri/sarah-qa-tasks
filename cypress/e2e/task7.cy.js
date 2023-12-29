describe("Task7",()=>{
    beforeEach(()=>{
         //the user navigate to the nopcommerce website
         cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
         //when the user login to the website
         const email="admin@yourstore.com";
         const password = "admin";
         cy.login(email,password);
          //and the user navigate to the home page
        cy.get("#nopSideBarPusher").click();
        //and the user clicked on the promotion
        cy.get(".nav-sidebar > li:nth-child(5) > a").click();
        cy.wait(1500);
    })
    it("Discounts",()=>{
        //and the user click on discount option
        cy.get(".nav-item").contains("Discounts").click({force:true});
        cy.wait(1500)
        //the user 
        cy.get(".btn-primary").first().click();
        cy.get("#Name").clear().type("Sarah's Discount");
        cy.wait(1500)
        cy.get("[name='save']").click();
        cy.wait(1500);
        cy.get(".alert-success").should("contain","The new discount has been added successfully.");
    
    }) 

    it("Affiliates",()=>{
        cy.get(".nav-item").contains("Affiliates").click({force:true});
        cy.get(".btn-primary").first().click();
        cy.wait(1500);
        cy.get("#Address_FirstName").clear().type("sarah");
        cy.get("#Address_LastName").clear().type("arouri");
        cy.get("#Address_Email").clear().type("h11j1dd4wwwu12@gmail.com");
        cy.get("#Address_CountryId").select("Palestine");
        cy.get("#Address_County").clear().type("Palestine");
        cy.get("#Address_City").clear().type("Ramallah");
        cy.get("#Address_Address1").clear().type("Ramallah");
        cy.wait(1500);
        cy.get("#Address_ZipPostalCode").clear().type(12356);
        cy.get("#Address_PhoneNumber").clear().type("0591234567");
        cy.wait(1500);
        cy.get("[name='save']").click({force:true});
        cy.get(".alert-success").should("contain","The new affiliate has been added successfully.")
    })

    it.only("Campaigns",()=>{
        cy.get(".nav-item").contains("Campaigns").click({force:true});
        cy.get(".btn-primary").first().click();
        cy.get("#Name").clear().type("sarah");
        cy.get("#Subject").clear().type("new");
        cy.wait(1500);
        cy.get("#Body").clear().type("this is a new campaigns");
        cy.get("[name='save']").click();
        cy.get(".alert-success").should("contain","The new campaign has been added successfully.");

    })
})

