class sharedActions {
  openNopCommerceWebsite() {
    cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
    return this;
  }
}

export default sharedActions;
