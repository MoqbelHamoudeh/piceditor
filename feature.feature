Feature: Facebook

  Scenario: facebook login
    Given I open facebook log in page
    When i login to facebook with this account details
      | email                    | password |
      | moqbelhammodeh@gmail.com | Test1234 |
     And i open account page
     And I create a post "test"
    And I validate the post is existed
     And I add bio
    And I validate that the bio is updated











