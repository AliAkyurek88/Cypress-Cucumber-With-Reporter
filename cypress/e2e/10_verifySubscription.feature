Feature: Verify Subscription in home page

 Scenario: Go to automationexercise.com and Verify Subscription in home page

     Given Navigate to url "http://automationexercise.com"
     When Verify that home page is visible successfully
     When Scroll down to footer
     When Verify text "Subscription"
     When Enter email address in input and click arrow button
     Then Verify success message "You have been successfully subscribed!" is visible