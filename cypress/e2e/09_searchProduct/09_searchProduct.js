import {Before,After, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let searchKey = "Men Tshirt"

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

When(/^Enter product name in search input and click search button$/, () => {
	cy.typeText("input#search_product",searchKey);
	cy.clickElement("button#submit_search");
});

When(/^Verify SEARCHED PRODUCTS is visible$/, () => {
	cy.contains("Searched Products").should('be.visible');
});

Then(/^Verify all the products related to search are visible$/, () => {
	cy.get(".productinfo.text-center > p").should('be.visible').then(function ($el) {
		let searcedProductName = $el.text();
		expect(searcedProductName).equal(searchKey);
	 })

});
