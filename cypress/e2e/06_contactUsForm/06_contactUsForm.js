import {Before,After, Given, When, Then } from "cypress-cucumber-preprocessor/steps";



Given(/^Navigate to url "([^"]*)"$/, (url) => {
	cy.visit(url);
});

When(/^Verify that home page is visible successfully$/, () => {
    cy.url().should('eq', 'https://automationexercise.com/')
});

When(/^Click on "([^"]*)" button$/, (containDesc) => {
	cy.log(containDesc);
	cy.contains(containDesc).should('be.visible').click()
});

When(/^Verify "([^"]*)" is visible$/, (containDesc) => {
	cy.log(containDesc);
	cy.contains(containDesc).should('be.visible')
});

When(/^Enter name, email, subject and message$/, () => {
    cy.get("input[name='name']").should('be.visible').type("Test Name");
	cy.get("input[name='email']").should('be.visible').type("test@testmail.com");
    cy.get("input[name='subject']").should('be.visible').type("Test subject");
	cy.get("#message").should('be.visible').type("test message");
});

When(/^Upload file$/, () => {

	cy.log("im looking for typescript with file upload");
  
});

When(/^Click "([^"]*)" button$/, (containDesc) => {
	cy.log(containDesc);
	cy.contains(containDesc).should('be.visible').click()
});


When(/^Click OK for window confirm button$/, () => {
	cy.on('window:confirm', function(confirmtext){
		return true;
	})
});


When(/^Verify success message "([^"]*)" is visible$/, (containDesc) => {
	cy.log(containDesc);
	cy.contains(containDesc).should('be.visible')
});

Then(/^Click "([^"]*)" button and verify that landed to home page successfully$/, (containDesc) => {
	cy.log(containDesc);
	cy.contains(containDesc).should('be.visible').click();
    cy.url().should('eq', 'https://automationexercise.com/')
});
