class addCampaignsActions {
  clickedOnCampaignsOption(value1) {
    cy.wait(5000);
    cy.get(".nav-item").contains("p", value1).click({ force: true });
    return this;
  }

  clickedOnCampaignsButton() {
    cy.get(".btn-primary").first().click();
    return this;
  }
  typedInNameField(name) {
    cy.get("#Name").clear().type(name);
    return this;
  }
  typedInSubField(sub) {
    cy.get("#Subject").clear().type(sub);
    return this;
  }
  typedInBodyField() {
    cy.wait(1500);
    cy.get("#Body").clear().type("this is a new campaigns");
    return this;
  }
  clickedOnSaveButton() {
    cy.get("[name='save']").click();
  }
  checkCampaignsAdded(message) {
    cy.get(".alert-success").should("contain",message);
  }
}

export default addCampaignsActions;
