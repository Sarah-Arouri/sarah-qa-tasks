it("task",()=>{ 
    cy.visit("/checkout/#shipping"); 
    /* ==== Generated with Cypress Studio ==== */ cy.get('#search').clear('s');
    cy.get('#search').type('shirt{enter}');
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click(); 
    cy.get('#option-label-size-143-item-167').click(); 
    cy.get('.swatch-attribute.color > .swatch-attribute-options').click();
    cy.get('#option-label-color-93-item-57').click();
    cy.get('#product-addtocart-button > span').click(); 
    cy.wait(5000); 
    cy.get('.showcart').click(); 
    cy.get('#top-cart-btn-checkout').click(); 
    cy.wait(7000); /* ==== End Cypress Studio ==== */
     //  start writing your code from here })
   

    //for Email Address
    //Select using id 
    cy.get("#customer-email-fieldset #customer-email");
    //.field.required [name="username"]
    //for first name
    //select using class and attribute
    cy.get(".control [name='firstname']");
    //for last name
    //select using class and attribute
    cy.get(".control [name='lastname']");
    //for company 
    //select using class and attribute
    cy.get(".control [name='company']");
    //for street name 
    //field1
    //Select using attribute
    cy.get("[name='street[0]']");
    //feild2
    //select using attribute
    cy.get("[name='street[1]']");
    //feild3
    //select using attribute
    cy.get("[name='street[2]']");
    //for city name
    //select using  attribute
    cy.get("[name='city']");
    //for state
    //select using  attribute
    cy.get("[name='region_id']");
    //for postal code
    //select using  attribute
    cy.get("[name='postcode']");
    //for country
    //select using  attribute
    cy.get("[name='country_id']");
    //for phone number
    //select using  attribute
    cy.get("[name='telephone']");
    //in the shipping method 
    //the first row
   //select using  attribute
    cy.get("[value='tablerate_bestway']");
    //the second row
    //select using  attribute
    cy.get("[value='flatrate_flatrate']");
    //for the button 
    //select using class
     cy.get(".primary .button");

    

})

