
Feature: Hr

    Scenario: Login using valid credentials
        Given I acess hr
        When I enter username Admin
        And I enter password admin123
        And I should validate sucessfull login
        And I should navigate to Admin
        Then I should verify the add.delete








