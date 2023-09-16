Feature:Add products in cart

 Scenario: Go to automationexercise.com and add products in cart

     Given Navigate to url "http://automationexercise.com"
     When Verify that home page is visible successfully
     When Click on "Products" button
     When Scroll down
     When Click on first product Add to cart button
     When Click Continue Shopping button
     When Click on second product Add to cart button
     When Click on "View Cart" button
     Then Verify their prices, quantity and names