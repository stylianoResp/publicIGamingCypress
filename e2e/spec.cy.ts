/// <reference types="cypress" />

//path where the custom command delcare 
/// <reference path = "../support/casino-url-commands.d.ts"/>
/// <reference path = "../support/casino-sign-up-commands.d.ts"/>
import { environmentData } from "../fixtures/environments/brands";

//import enum for sign-up form states - to ensure type safety and autocompletion
//another approach is to use type or interface but enum is more suitable for this case as parameters are not isolated values but states of the form
import { SignUpFormState, LogInFromState } from "../support/safety-type-enum-parameters";


//import the enviroment data from env.config file
import { EnvironmentName, EnvironmentConfig } from "../env.config";
// Choose environment
const env: EnvironmentName = 'production';
// Cast imported brands as BrandConfig[]
const brands = environmentData[env].brands as EnvironmentConfig['brands'];

//loop before test
brands.forEach((brand) => {

  describe(`Test in Online Casino - ${brand.name}`, () => {
    //use befoe Each test to clear cashe and cookies with the below functions from cypress library
    beforeEach(() => {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();
    })

    it('Validation State for Sign-Up Fields(Empty Fields)', () => {
      cy.visitCasino(brand.url)
      cy.signUpForm(SignUpFormState.AreEmptyData)
        cy.readFile('cypress/fixtures/emtpyFieldsMessageAllEmpty.json').then((data) => {
          const emptyFieldsMessage = data.message;
          cy.writeFile('cypress/fixtures/validationResults.json', emptyFieldsMessage, { flag: 'a+' }).then(() => {
            cy.log(`Validation result for ${brand.name} - Empty Fields: ${emptyFieldsMessage}`);
          });
        });
      })

    it('Validation State for Sign-Up Fields(Invalid Fields in Step 1)', () => {
      cy.visitCasino(brand.url)
      cy.signUpForm(SignUpFormState.IsInvalidPasswordAndEmail)
    })

    it('Validation State for Sign-Up Fields(Invalid Fields in Step 2)', () => {
      cy.visitCasino(brand.url)
      cy.signUpForm(SignUpFormState.IsInvalidFirstNameLastName)
    })

    it('Validation State for Sign-Up Fields(Fill ALL Fields)', () => {
      cy.visitCasino(brand.url)
      cy.signUpForm(SignUpFormState.AreAllFilled)
      cy.url().should('include', /deposit/i) // Adjust the URL check to confirm lan ding on the deposit page after successful sign-up
    })

     it('Log In To Account - Valid Password )', () => {
      cy.visitCasino(brand.url)
      cy.logIn(LogInFromState.AreCorrectCredentials)
      cy.logOut()
    })

    it('Log In To Account - Invalid Password)', () => {
      cy.visitCasino(brand.url)
      cy.logIn(LogInFromState.AreInvalidCredentials)
    })
  })
})