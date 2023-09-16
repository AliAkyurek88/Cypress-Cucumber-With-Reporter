Feature: Search Product

 Scenario: Go to automationexercise.com and Search Product

     Given Navigate to url "http://automationexercise.com"
     When Verify that home page is visible successfully
     When Click on "Products" button
     When Enter product name in search input and click search button
     When Verify SEARCHED PRODUCTS is visible
     Then Verify all the products related to search are visible