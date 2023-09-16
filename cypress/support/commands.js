

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).should('exist').click()
 })
 
 Cypress.Commands.add('typeText', (field, text) => {
    cy.get(field).should('exist').type(text)
 })
 
 Cypress.Commands.add('verifyProductDetail', (loop) => {
 
    let productPrice;
    let productName;
    let productDetailPrice;
    let productDetailName;
    let productDetailBrand;
    let productDetailCategory;
    let productDetailAvailability;
    let productDetailCondition;
 
 
    for (let index = 2; index < loop; index++) {
 
       cy.get(".features_items > div:nth-of-type(" + index + ") .productinfo.text-center > h2").then(function ($el) {
          productPrice = $el.text();
       })
 
       cy.get(".features_items > div:nth-of-type(" + index + ") .productinfo.text-center > p").then(function ($el) {
          productName = $el.text();
       })
 
       cy.get(".features_items > div:nth-of-type(" + index + ") .nav.nav-justified.nav-pills  a").click();
 
       cy.get(".product-information > h2").then(function ($el) {
          productDetailName = $el.text();
       })
 
       cy.get(".product-information span:nth-child(5) span").then(function ($el) {
          productDetailPrice = $el.text();
       })
 
       expect(productName).equal(productDetailName);
       expect(productPrice).equal(productDetailPrice);
 
       cy.get(".product-information > p:nth-of-type(1)").should('be.visible').then(function ($el) {
          productDetailCategory = $el.text();
          expect(productDetailCategory.length).to.be.at.greaterThan(12);
       })
 
       cy.get(".product-information > p:nth-of-type(4)").should('be.visible').then(function ($el) {
          productDetailBrand = $el.text();
          expect(productDetailBrand.length).to.be.at.greaterThan(8);
       })
 
       cy.get(".product-information > p:nth-of-type(2)").should('be.visible').then(function ($el) {
          productDetailAvailability = $el.text();
          expect(productDetailAvailability.length).to.be.at.greaterThan(15);
       })
 
       cy.get(".product-information > p:nth-of-type(3)").should('be.visible').then(function ($el) {
          productDetailCondition = $el.text();
          expect(productDetailCondition.length).to.be.at.greaterThan(13);
       })
 
       cy.go('back');
    }
 })
 
 Cypress.Commands.add('register', (name, email, password, firstName, lastName, address, country, state, city, zipcode, mobileNumber) => {
    cy.get("input[name='name']").should('be.visible').type(email);
    cy.get("[action='\/signup'] [type='email']").should('be.visible').type(email);
    cy.get("[data-qa='signup-button']").should('be.visible').click();
    cy.get("[id='id_gender1']").should('be.visible').check();
    cy.get("input[name='name']").should('be.visible').clear().type(name);
    cy.get("[type='password']").should('be.visible').type(password);
    cy.get("[data-qa='days']").should('be.visible').select("5");
    cy.get("[data-qa='months']").should('be.visible').select("1");
    cy.get("[data-qa='years']").should('be.visible').select("1995");
    cy.get("[id='first_name']").should('be.visible').type(firstName);
    cy.get("[id='last_name']").should('be.visible').type(lastName);
    cy.get("[id='address1']").should('be.visible').type(address);
    cy.get("[data-qa='country']").should('be.visible').select(country);
    cy.get("[id='state']").should('be.visible').type(state);
    cy.get("[id='city']").should('be.visible').type(city);
    cy.get("[id='zipcode']").should('be.visible').type(zipcode);
    cy.get("[id='mobile_number']").should('be.visible').type(mobileNumber);
    cy.get("[action] .btn-default").should("be.visible").click();
 })
 
 Cypress.Commands.add('verifyElementText', (elementLocate, expectText) => {
    cy.get(elementLocate).then(function ($el) {
       let elementText = $el.text();
       cy.log("expectText");
       cy.log(expectText.replace("\n\t\t\t\t\t\t\t\t"," "));
       cy.log("elementText");
       cy.log(elementText.replace("\n\t\t\t\t\t\t\t\t"," "));
       expect(expectText.replace("\n\t\t\t\t\t\t\t\t"," ")).equal(elementText.replace("\n\t\t\t\t\t\t\t\t"," "));
    })
 })
 
 Cypress.Commands.add('enterPaymentCardDetail', (nameOnCard, cardNumber, cvc, expirationM, expirationY) => {
    cy.get("[name='name_on_card']").should("be.visible").type(nameOnCard);
    cy.get(".card-number").should("be.visible").type(cardNumber);
    cy.get(".card-cvc").should("be.visible").type(cvc);
    cy.get("[name='expiry_month']").should("be.visible").type(expirationM);
    cy.get(".card-expiry-year").should("be.visible").type(expirationY);
 })
 