class addCampaignsAssertions {
  checkCampaignsAdded(message) {
    cy.get(".alert-success").should("contain", message);
    return this;
  }
  checkedAddedProduct(name) {
    cy.get("#campaigns-grid tbody tr").should("contain", name);
  }
}
export default addCampaignsAssertions;
