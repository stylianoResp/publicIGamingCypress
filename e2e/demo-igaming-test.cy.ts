/// <reference types="cypress" />

//path where the custom command  included
/// <reference path = "../support/helpers/casino-url-commands.d.ts"/>
/// <reference path = "../support/helpers/casino-sign-up-commands.d.ts"/>


//import enum for sign-up , log in , envType , brandType - to ensure type safety and autocompletion 
import { SignUpFormState, LogInFromState, EnumEnvironmentTypes, EnumBrandsTypes } from "../support/safety-type-enum-parameters.js";

// Import custom hook for environment and brand selection
import { useBrandEnvHook } from '../support/hooks/environment-urls.ts'

//use the reusable env hook to get the correct enum type env and brand
const { currentUrl } = useBrandEnvHook(EnumEnvironmentTypes.production, EnumBrandsTypes.madcasino);

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
      cy.visitCasino(currentUrl)
      cy.signUpForm(SignUpFormState.AreEmptyData)
        cy.readFile('cypress/fixtures/emtpyFieldsMessageAllEmpty.json').then((data) => {
          const emptyFieldsMessage = data.message;
          cy.writeFile('cypress/fixtures/validationResults.json', emptyFieldsMessage, { flag: 'a+' }).then(() => {
            cy.log(`Validation result for ${brand.name} - Empty Fields: ${emptyFieldsMessage}`);
          });
        });
      })

    it('Validation State for Sign-Up Fields(Invalid Fields in Step 1)', () => {
      cy.visitCasino(currentUrl)
      cy.signUpForm(SignUpFormState.IsInvalidPasswordAndEmail)
    })

    it('Validation State for Sign-Up Fields(Invalid Fields in Step 2)', () => {
      cy.visitCasino(currentUrl)
      cy.signUpForm(SignUpFormState.IsInvalidFirstNameLastName)
    })

    it('Validation State for Sign-Up Fields(Fill ALL Fields)', () => {
      cy.visitCasino(currentUrl)
      cy.signUpForm(SignUpFormState.AreAllFilled)
      cy.url().should('include', /deposit/i) // Adjust the URL check to confirm lan ding on the deposit page after successful sign-up
    })

     it('Log In To Account - Valid Password )', () => {
      cy.visitCasino(currentUrl)
      cy.logIn(LogInFromState.AreCorrectCredentials)
      cy.logOut()
    })

    it('Log In To Account - Invalid Password)', () => {
      cy.visitCasino(currentUrl)
      cy.logIn(LogInFromState.AreInvalidCredentials)
    })
  })
})