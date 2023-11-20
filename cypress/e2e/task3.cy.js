/// <reference types="cypress" />
describe("Task3",()=>{
    it("Sign In",()=>{
    cy.visit("https://demo.productionready.io/#/");
    cy.contains("Sign in").click();
    cy.visit("https://demo.productionready.io/#/login");
    cy.get("[class='text-xs-center ng-binding']");
    cy.get(" p > a:nth-child(2)");
    cy.get("[class='form-group'] [type='email']");
    cy.get("[class='form-group'] [type='password']");
    cy.get("[class='btn btn-lg btn-primary pull-xs-right ng-binding']");
    })

    it("Home",()=>{
        cy.visit("https://demo.productionready.io/#/");
        // cy.contains("Sign in").click();
        cy.get("[class='navbar-brand ng-binding']");
        cy.get("[class='banner'] [class='logo-font ng-binding']");
        cy.get("[class='navbar navbar-light']  [class='nav-link active']");
        cy.contains("Sign in");
        //cy.get("[class='banner'] [class='logo-font ng-binding']");
        cy.contains("A place to share your knowledge.");
        cy.contains("Global Feed");
        cy.contains("Popular Tags");
        cy.get("[class='article-meta'] [class='pull-xs-right ng-scope ng-isolate-scope'] ").contains("2175");
        cy.contains("span", "Read more...");
        cy.contains("codebaseShow");
        cy.get("[class='sidebar']").contains("deserunt");
    })


    it("Quantify the alarm",()=>{
        cy.visit("https://demo.productionready.io/#/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863");
        cy.get(" div > h1");
        cy.get(" article-actions > article-meta > div > a > img");
        cy.get("[class='info']").contains("a","Anah Benešová");
        cy.get("[class='info']").contains("span","December 9, 2022");
        cy.get("[class='ng-scope']").contains("Follow Anah Benešová");
    
        //cy.get("div.banner > div > article-actions > article-meta > div > ng-transclude > span:nth-child(2) > follow-btn > button")
        cy.get("[class='ng-scope']").contains("Favorite Article")
        cy.get("[class='ng-binding'] > p");
        cy.contains("li","rerum");
        cy.contains("li","quae");
    })
})