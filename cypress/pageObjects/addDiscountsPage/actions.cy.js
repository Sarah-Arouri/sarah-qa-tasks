class addDiscountsActions {
  clickedOnDiscounts() {
    cy.wait(1500);
    cy.get(".nav-item").contains("Discounts").click({ force: true });
    return this;
  }

  clickedOnDiscountButton() {
    cy.get(".btn-primary").first().click();
    return this;
  }

  typedOnNameField(name) {
    cy.get("#Name").clear().type(name);
    return this;
  }

  typedOnDiscountType() {
    cy.get("#DiscountTypeId").select("Assigned to order total");
    return this;
  }

  typedOnPercentageField() {
    cy.get("#UsePercentage").check();
    return this;
  }

  typedOnDiscountPercentage() {
    cy.get("#DiscountPercentage").type(10, { force: true });
  }

  clickedOnSaveButton() {
    cy.wait(1500);
    cy.get("[name='save']").click();
    return this;
  }

  typedOnNameChecked(name) {
    cy.get("#SearchDiscountName").type(name);
  }

  selectDiscountsType() {
    cy.get("#SearchDiscountTypeId").select("Assigned to order total");
    return this;
  }

  clickedOnSaveButton() {
    cy.get("#search-discounts").click();
    return this;
  }
}

export default addDiscountsActions;
