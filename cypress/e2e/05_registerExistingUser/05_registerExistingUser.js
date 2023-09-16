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


When(/^Enter name and already registered email address$/, () => {
    cy.get("input[name='name']").should('be.visible').type("Test Name");
	cy.get("[action='\/signup'] [type='email']").should('be.visible').type("basetest@testmail.com");
});


When(/^Click on Signup button$/, () => {
	cy.get("[action='\/signup'] .btn-default").should('be.visible').click();
});

Then(/^Verify error "([^"]*)" is visible$/, (containDesc) => {
    cy.log(containDesc);
	cy.contains(containDesc).should('be.visible')
});

