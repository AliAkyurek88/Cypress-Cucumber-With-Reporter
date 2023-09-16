import {Before,After, Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given(/^Navigate to url "([^"]*)"$/, (url) => {
    cy.visit(url);
});

When(/^Verify that home page is visible successfully$/, () => {
	cy.url().should('eq', 'https://automationexercise.com/')
});

When(/^Scroll down to footer$/, () => {
	cy.scrollTo("bottom");
});


When(/^Verify text "([^"]*)"$/, (containDesc) => {
	cy.contains(containDesc).should('be.visible');
});

When(/^Enter email address in input and click arrow button$/, () => {
	cy.typeText("input#susbscribe_email","testdeneme1q2w@gmail.com");
    cy.clickElement("button#subscribe");
});

Then(/^Verify success message "([^"]*)" is visible$/, (containDesc) => {
	cy.contains(containDesc).should('be.visible');
	cy.get("div#success-subscribe > .alert.alert-success").should("be.visible");
});
