declare namespace Cypress {
  interface Chainable {
     signUpForm(dataType:string): Chainable<void>;
     validationOfCustomerDetails(): Chainable<void>;
  }
}
