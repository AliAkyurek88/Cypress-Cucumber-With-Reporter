import {Before,After, Given, When, Then } from "cypress-cucumber-preprocessor/steps";



Given(/^Start to type your Given step here Navigate to url "([^"]*)"$/, (url) => {
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

When(/^Enter incorrect email address and password$/, () => {
	cy.get("[action='\/login'] [type='email']").should('be.visible').type("basetest@xyxyzz.com");
	cy.get("[type='password']").should('be.visible').type("1q2w3e4razsx");
});

When(/^Click on login button$/, () => {
	cy.get("[action='\/login'] .btn-default").should('be.visible').click();
});

Then(/^Verify error 'Your email or password is incorrect!' is visible$/, () => {
	cy.contains("Your email or password is incorrect!").should('be.visible');
});
