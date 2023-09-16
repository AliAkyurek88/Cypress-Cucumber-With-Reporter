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

Then(/^Verify user is navigated to test cases page successfully$/, () => {
	cy.url().should('eq', 'https://automationexercise.com/test_cases')
});
