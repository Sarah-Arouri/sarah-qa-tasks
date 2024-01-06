class sharedAssertions {
  checkURLEqualValue(url) {
    cy.url("eq", url);
    return this;
  }
}

export default sharedAssertions;
