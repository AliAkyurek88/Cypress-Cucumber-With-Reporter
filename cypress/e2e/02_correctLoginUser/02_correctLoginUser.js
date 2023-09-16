
import {Before,After, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(/^Navigate to url "([^"]*)"$/, (url) => {
	cy.visit(url);
	
});

When(/^Start to type your When step here Verify that home page is visible successfully$/, () => {
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

When(/^Enter correct email address and password$/, () => {
	cy.get("[action='\/login'] [type='email']").should('be.visible').type("basetest@testmail.com");
	cy.get("[type='password']").should('be.visible').type("1q2w3e4r");
	
});


When(/^Click on Login button$/, () => {
	cy.get("[action='\/login'] .btn-default").should('be.visible').click();
});


Then(/^Verify that Logged in as username is visible$/, () => {
	
	cy.contains("Test Name").should('be.visible');
});
