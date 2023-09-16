
Feature: Correct login

 Scenario: Go to automationexercise.com, enter correct email address and password and login

     Given Navigate to url "http://automationexercise.com"
     When Start to type your When step here Verify that home page is visible successfully
     When Click on "Signup / Login" button
     When Verify "Login to your account" is visible
     When Enter correct email address and password
     When Click on Login button
     Then Verify that Logged in as username is visible
