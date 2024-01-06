class addAffiliatesActions {
  clickedOnAffliatesOption() {
    cy.get(".nav-item").contains("Affiliates").click({ force: true });
    return this;
  }

  clickedOnAffiliatesButton() {
    cy.get(".btn-primary").first().click();
    cy.wait(1500);
    return this;
  }

  typedInFirstNameField(firstName) {
    cy.get("#Address_FirstName").clear().type(firstName);
    return this;
  }

  typedInLastNameField(lastName) {
    cy.get("#Address_LastName").clear().type(lastName);
    return this;
  }

  typedInEmailField(email) {
    cy.get("#Address_Email").clear().type(email);
    return this;
  }
  typeDInCountryIdField() {
    cy.get("#Address_CountryId").select("Palestine");
    return this;
  }
  typedInCountryField() {
    cy.get("#Address_County").clear().type("Palestine");
    return this;
  }
  typedInCityField() {
    cy.get("#Address_City").clear().type("Ramallah");
    return this;
  }
  typedInAddressField() {
    cy.get("#Address_Address1").clear().type("Ramallah");
    return this;
  }
  typedInPostalCodeFeild() {
    cy.wait(1500);
    cy.get("#Address_ZipPostalCode").clear().type(12356);
    return this;
  }
  typedInPhoneNumberField() {
    cy.get("#Address_PhoneNumber").clear().type("0591234567");
    return this;
  }
  clickedOnSaveButton() {
    cy.wait(1500);
    cy.get("[name='save']").click({ force: true });
    return this;
  }

  typedInTableFirstName(firstName) {
    cy.get("#SearchFirstName").type(firstName);
    return this;
  }
  typedInTableLastName(lastName) {
    cy.get("#SearchLastName").type(lastName);
    return this;
  }
  clickedOnSearchButton() {
    cy.get("#search-affiliates").click();
  }
}

export default addAffiliatesActions;
