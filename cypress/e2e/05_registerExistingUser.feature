Feature: Register existing user

 Scenario: Go to automationexercise.com and register existing user

     Given Navigate to url "http://automationexercise.com"
     When Verify that home page is visible successfully
     When Click on "Signup / Login" button
     When Verify "Login to your account" is visible
     When Verify "New User Signup!" is visible
     When Enter name and already registered email address
     When Click on Signup button
     Then Verify error "Email Address already exist!" is visible
     