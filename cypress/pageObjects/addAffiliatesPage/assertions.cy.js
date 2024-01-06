class addAffiliatesAssertions {
  addedTheAffiliatesMessage(message) {
    cy.get(".alert-success").should("contain", message);
  }

  checkedTheAffiliates(firstName) {
    cy.get("#affiliates-grid tbody tr").should("contain", firstName);
  }
}

export default addAffiliatesAssertions;
