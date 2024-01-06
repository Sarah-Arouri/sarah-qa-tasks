class loginPageActions {
  typeInEmailInputField(email) {
    cy.get("#Email").clear().type(email);
    return this;
  }

  typeInPasswordInputField(password) {
    cy.get("#Password").clear().type(password);
    return this;
  }

  clickOnLogInButton() {
    cy.get(".login-button").click();
    return this;
  }
}

export default loginPageActions;
