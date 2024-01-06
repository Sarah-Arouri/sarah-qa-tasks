class addDiscountsAssertions {
  discountsMessage(message) {
    cy.wait(1500);
    cy.get(".alert-success").should("contain", message);
  }
  checkedExistingDiscounts(name) {
    cy.wait(1500);
    cy.get("#discounts-grid tbody tr td").should("contain", name);
    return this;
  }
}

export default addDiscountsAssertions;
