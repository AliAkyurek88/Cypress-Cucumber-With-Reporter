import {Before,After, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let firstProductName;
let secondProductName;
let firstProductPrice;
let secondProductPrice;

Given(/^Navigate to url "([^"]*)"$/, (url) => {
	cy.visit(url);
});

When(/^Verify that home page is visible successfully$/, () => {
	cy.url().should('eq', 'https://automationexercise.com/')

});

When(/^Click on "([^"]*)" button$/, (containDesc) => {
	cy.contains(containDesc).click();
});

When(/^Scroll down$/, () => {
	cy.scrollTo(0, 50)
});

When(/^Click on first product Add to cart button$/, () => {

	cy.get(".features_items [class='col-sm-4']:nth-child(3) .text-center p").should('be.visible').then(function ($el) {
		firstProductName = $el.text();
		expect(firstProductName.length).to.be.at.greaterThan(1);
	})

	cy.get(".features_items [class='col-sm-4']:nth-child(3) .text-center h2").should('be.visible').then(function ($el) {
		firstProductPrice = $el.text();
		expect(firstProductPrice.length).to.be.at.greaterThan(1);
	})

	cy.get(".add-to-cart.btn.btn-default").first().click();
});

When(/^Click Continue Shopping button$/, () => {
	cy.clickElement(".btn.btn-block.btn-success.close-modal");
});

When(/^Click on second product Add to cart button$/, () => {

	cy.get(".features_items [class='col-sm-4']:nth-child(4) .text-center p").should('be.visible').then(function ($el) {
		secondProductName = $el.text();
		expect(secondProductName.length).to.be.at.greaterThan(1);
	})

	cy.get(".features_items [class='col-sm-4']:nth-child(4) .text-center h2").should('be.visible').then(function ($el) {
		secondProductPrice = $el.text();
		expect(secondProductPrice.length).to.be.at.greaterThan(1);
	})
	cy.get(".add-to-cart.btn.btn-default").eq(2).click();
});


Then(/^Verify their prices, quantity and names$/, () => {

	cy.get("[href='\/product_details\/1']").should('be.visible').then(function ($el) {

		expect(firstProductName).equal($el.text());
	})

	cy.get("[href='\/product_details\/2']").should('be.visible').then(function ($el) {

		expect(secondProductName).equal($el.text());
	})

	cy.get("tr:nth-of-type(1)  .cart_total_price").should('be.visible').then(function ($el) {

		expect(firstProductPrice).equal($el.text());
	})

	cy.get("tr:nth-of-type(2)  .cart_total_price").should('be.visible').then(function ($el) {

		expect(secondProductPrice).equal($el.text());
	})

});


