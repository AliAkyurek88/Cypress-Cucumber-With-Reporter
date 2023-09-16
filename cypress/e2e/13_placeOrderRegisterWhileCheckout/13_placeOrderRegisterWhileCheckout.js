import {Before,After, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(/^Navigate to url "([^"]*)"$/, (url) => {
    cy.visit(url);
});

When(/^Verify that home page is visible successfully$/, () => {
    cy.url().should('eq', 'https://automationexercise.com/')

});

When(/^Click on "([^"]*)" button$/, (containDesc) => {
    cy.contains(containDesc).click();
});

When(/^Add any products to cart and click Continue Shopping button$/, () => {
    cy.get(".add-to-cart.btn.btn-default").first().click();
    cy.wait(2000);
    cy.clickElement(".btn.btn-block.btn-success.close-modal");
});

When(/^Click Register Login button$/, () => {
    cy.clickElement(".modal-confirm.modal-dialog a");
});

When(/^Verify that cart page is displayed$/, () => {
    cy.url().should('eq', 'https://automationexercise.com/view_cart')
    cy.contains("Shopping Cart").should("be.visible");
});

When(/^Click Proceed To Checkout$/, () => {
    cy.clickElement(".check_out");
});

When(/^Fill all details in Signup and create account$/, () => {
    cy.fixture("testData").then((testData) => {
        cy.register(testData.name, testData.email, testData.password, testData.firstName, testData.lastName,
            testData.address, testData.country, testData.state, testData.city, testData.zipcode, testData.mobileNumber);
    })
});

When(/^Verify that "([^"]*)" is visible$/, (containDesc) => {
    cy.log(containDesc);
    cy.contains(containDesc).should('be.visible').click()
});

When(/^Verify Logged in as username at top$/, () => {
    cy.contains("Test Example Name").should('be.visible')
});

When(/^Verify Address Details and Review Your Order$/, () => {
    cy.fixture("testData").then((testData) => {
        cy.verifyElementText("#address_delivery > li.address_firstname.address_lastname", "Mr. " + testData.firstName + " " + testData.lastName);
        cy.verifyElementText("ul#address_delivery > li:nth-of-type(4)", testData.address);
        cy.verifyElementText("#address_delivery .address_state_name", testData.city + ' ' + testData.state + ' ' + testData.zipcode);
        cy.verifyElementText("#address_delivery .address_country_name", testData.country);
        cy.verifyElementText("#address_delivery > li.address_phone", testData.mobileNumber);
    })

});

When(/^Enter description in comment text area and click "([^"]*)"$/, (containDesc) => {
    cy.typeText("div#ordermsg > textarea[name='message']", "test description");
    cy.contains(containDesc).should("be.visible").click();
});

When(/^Enter payment details: Name on Card, Card Number, CVC, Expiration date$/, () => {
    cy.fixture("testData").then((testData) => {
        cy.enterPaymentCardDetail(testData.nameOnCard, testData.cardNumber, testData.cvc, testData.expirationM, testData.expirationY);
    })
});

When(/^Click "([^"]*)" button and Verify success message "([^"]*)"$/, (containButton, containDesc) => {
    cy.log("xxx");
});



When(/^Verify success message "([^"]*)"$/, (containDesc) => {
    cy.log(containDesc);
    cy.contains(containDesc).should('be.visible');
});
