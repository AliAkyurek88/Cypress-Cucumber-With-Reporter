
Feature: Incorrect login

 Scenario: Go to automationexercise.com, enter incorrect email address and password and login

     Given Start to type your Given step here Navigate to url "http://automationexercise.com"
     When Verify that home page is visible successfully
     When Click on "Signup / Login" button
     When Verify "Login to your account" is visible
     When Enter incorrect email address and password
     When Click on login button
     Then Verify error 'Your email or password is incorrect!' is visible
