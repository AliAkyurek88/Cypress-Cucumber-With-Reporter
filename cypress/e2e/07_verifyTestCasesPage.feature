Feature: Verify Test Cases Page

 Scenario: Go to automationexercise.com and verify test cases page

     Given Navigate to url "http://automationexercise.com"
     When Verify that home page is visible successfully
     When Click on "Test Cases" button
     Then Verify user is navigated to test cases page successfully