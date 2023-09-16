Feature: Verify Product Quantity In Cart

 Scenario: Go to automationexercise.com and verify Product Quantity In Cart

     Given Navigate to url "http://automationexercise.com"
     When Verify that home page is visible successfully
     When Click on "Products" button
     When Click View Product for any product on home page
     When Verify product detail is opened
     When Increase quantity to 4
     When Click Add to cart button
     When Click on "View Cart" button
     Then Verify that product is displayed in cart page with exact quantity


