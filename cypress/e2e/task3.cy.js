/// <reference types="cypress" />
describe("Task3",()=>{
    it("Sign In",()=>{
    cy.visit("https://demo.productionready.io/#/login");
    //select using attribute
    cy.get("[class='text-xs-center ng-binding']");
    //select using parent and nth childs
    cy.get(" p > a:nth-child(2)");
    //select using attribute with inside element
    cy.get("[class='form-group'] [type='email']");
    //select using attribute with inside element
    cy.get("[class='form-group'] [type='password']");
    //select using attribute
    cy.get("[class='btn btn-lg btn-primary pull-xs-right ng-binding']");
    cy.get("button");
    //cy.contains("Sign in").click();
    //cy.visit("https://demo.productionready.io/#/");
    })

    it("Home",()=>{
        cy.visit("https://demo.productionready.io/#/");
        // cy.contains("Sign in").click();
        //select using attribute
        cy.get("[class='navbar-brand ng-binding']");
        //select using attribute
        cy.get("[class='banner'] [class='logo-font ng-binding']");
        //select using attribute
        cy.get("[class='navbar navbar-light']  [class='nav-link active']");
        //select using contains
        //cy.contains("Sign in");
        //cy.get("[class='banner'] [class='logo-font ng-binding']");
        //select using contains
        cy.contains("A place to share your knowledge.");
        //select using contains
        cy.contains("Global Feed");
        //select using contains
        cy.contains("Popular Tags");
        //select using attribute and contains
        cy.get("[class='article-meta'] [class='pull-xs-right ng-scope ng-isolate-scope'] ").contains("2175");
        //select using contains
        cy.contains("span", "Read more...");
        //select using contains
        cy.contains("codebaseShow");
        //select using attribute and contains
        cy.get("[class='sidebar']").contains("deserunt");
    })


    it("Quantify the alarm",()=>{
        cy.visit("https://demo.productionready.io/#/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863");
       //select using parent 
        cy.get(" div > h1");
        //select using parents
        cy.get(" article-actions > article-meta > div > a > img");
        //select using attribute and contains
        cy.get("[class='info']").contains("a","Anah Benešová");
        //select using attribute and contains
        cy.get("[class='info']").contains("span","December 9, 2022");
         //select using attribute and contains
        cy.get("[class='ng-scope']").contains("Follow Anah Benešová");
    
        //cy.get("div.banner > div > article-actions > article-meta > div > ng-transclude > span:nth-child(2) > follow-btn > button")
         //select using attribute and contains
        cy.get("[class='ng-scope']").contains("Favorite Article");
        //select using attribute and parent
        cy.get("[class='ng-binding'] > p");
        //select using contains
        cy.contains("li","rerum");
        //select using contains
        cy.contains("li","quae");
    })
})