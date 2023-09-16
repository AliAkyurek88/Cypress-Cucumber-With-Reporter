Feature: Verify Products and product detail

 Scenario: Go to automationexercise.com and verify Products and product detail

     Given Navigate to url "http://automationexercise.com"
     When Verify that home page is visible successfully
     When Click on "Products" button
     When Verify user is navigated to ALL PRODUCTS page successfully
     When Verify the products list is visible
     Then Clic on product and verify product detail page and that detail detail is visible: product name, category, price, availability, condition, brand