
Feature: Task

    Scenario: Login using valid credentials
        Given I acess task
        When I enter username Admin
        And I enter password admin123
        And I should validate sucessfull login
        Then I should navigate to Info









