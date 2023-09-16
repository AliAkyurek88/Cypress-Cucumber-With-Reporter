Feature: Contact us form

 Scenario: Go to automationexercise.com and testing the contact us page

     Given Navigate to url "http://automationexercise.com"
     When Verify that home page is visible successfully
     When Click on " Contact us" button
     When Verify "Get In Touch" is visible
     When Enter name, email, subject and message
     When Upload file
     When Click "Submit" button
     When Click OK for window confirm button
     When Verify success message "Success! Your details have been submitted successfully." is visible
     Then Click "Home" button and verify that landed to home page successfully