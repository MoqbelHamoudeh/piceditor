Feature: Photo resize

  Scenario: Uploading a photo and resizing it
    Given I open picresize website
    When I upload a photo
    Then I make some changes to the photo
    And I download the edited picture
