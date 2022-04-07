Feature: The search input

  Scenario Outline: I can write text in the search input
    Given I am on webdriverio page
    When I click on search
    Then I type <text> to search

      Examples:
          | text   |
          | Value  |