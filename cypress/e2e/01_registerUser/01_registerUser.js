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

When(/^Enter name and email address$/, () => {
	cy.get("input[name='name']").should('be.visible').type("Test Name 3");
	cy.get("[action='\/signup'] [type='email']").should('be.visible').type("test2233221@testmail.com");
});


When(/^Click Signup button$/, () => {
	cy.get("[data-qa='signup-button']").should('be.visible').click();
});


When(/^Verify that "([^"]*)" is visible$/, (containDesc) => {
	cy.log(containDesc);
	cy.contains(containDesc).should('be.visible').click()
});

When(/^Fill details: Title, Name, Email, Password, Date of birth$/, () => {
	cy.get("[id='id_gender1']").should('be.visible').check();
	cy.get("input[name='name']").should('be.visible').clear().type("Test Name 3");
	cy.get("[type='password']").should('be.visible').type("1q2w3e4r");
	cy.get("[data-qa='days']").should('be.visible').select("5");
	cy.get("[data-qa='months']").should('be.visible').select("1");
	cy.get("[data-qa='years']").should('be.visible').select("1995");
	
});


When(/^Select checkbox Sign up for our newsletter!$/, () => {
	cy.get("#newsletter").should('be.visible').check();
});

When(/^Select checkbox Receive special offers from our partners!$/, () => {
	cy.get("#optin").should('be.visible').check();
});


When(/^Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number$/, () => {
	cy.get("[id='first_name']").should('be.visible').type("test first name");
	cy.get("[id='last_name']").should('be.visible').type("test last name");
	cy.get("[id='address1']").should('be.visible').type("test address street and location");
	cy.get("[data-qa='country']").should('be.visible').select("Australia");
	cy.get("[id='state']").should('be.visible').type("test astate");
	cy.get("[id='city']").should('be.visible').type("test city");
	cy.get("[id='zipcode']").should('be.visible').type("test zipcode");
	cy.get("[id='mobile_number']").should('be.visible').type("test mobile number");
});


When(/^Verify that Logged in as username "([^"]*)" is visible$/, (containDesc) => {
	cy.log(containDesc);
	cy.contains(containDesc).should('be.visible');
});


