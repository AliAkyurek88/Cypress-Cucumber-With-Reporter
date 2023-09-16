Feature: Register User

    Scenario: Go to automationexercise.com and register user

       Given Navigate to url "https://automationexercise.com"
       When Verify that home page is visible successfully
       When Click on "Signup / Login" button
       When Verify "New User Signup!" is visible
       When Enter name and email address
       When Click Signup button
       When Verify that "Enter Account Information" is visible
       When Fill details: Title, Name, Email, Password, Date of birth
       When Select checkbox Sign up for our newsletter!
       When Select checkbox Receive special offers from our partners!
       When Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
       When Click on "Create Account" button
       When Verify that "Account Created!" is visible
       When Click on "Continue" button
       When Verify that Logged in as username "Test Name" is visible
       When Click on "Delete Account" button
       When Verify that "Account Deleted!" is visible
       Then Click on "Continue" button