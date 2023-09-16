Feature: Place Order Register While Checkout

 Scenario: Go to automationexercise.com and Place Order Register While Checkout

     Given Navigate to url "http://automationexercise.com"
     When Verify that home page is visible successfully
     When Click on "Products" button
     When Add any products to cart and click Continue Shopping button
     When Click on "Cart" button
     When Verify that cart page is displayed
     When Click Proceed To Checkout
     When Click Register Login button
     When Fill all details in Signup and create account
     When Verify that "Account Created!" is visible
     When Click on "Continue" button
     When Verify Logged in as username at top
     When Click on "Cart" button
     When Click on "Proceed To Checkout" button
     When Verify Address Details and Review Your Order
     When Enter description in comment text area and click "Place Order"
     When Enter payment details: Name on Card, Card Number, CVC, Expiration date
     When Click "Pay and Confirm Order" button and Verify success message "Your order has been placed successfully!"
     When Click on "Delete Account" button
     When Verify that "Account Deleted!" is visible
     Then Click on "Continue" button

     