
Feature: logout user

 Scenario: Go to automationexercise.com, login and logout

     Given Start to type your When step here Navigate to url "http://automationexercise.com"
     When Start to type your When step here Verify that home page is visible successfully
     When Click on "Signup / Login" button
     When Verify "Login to your account" is visible
     When Enter correct email address and password
     When Click on login button
     When Verify that logged in as username is visible
     When Click on "Logout" button
     Then Verify that user is navigated to login page