class loginPageAssertions {
  checkContainValue(value) {
    cy.get(".content-header").should("contain", value);
    return this;
  }
}

export default loginPageAssertions;
