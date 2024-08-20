Feature: Login Feature

    Scenario: Login to OrangeHRM
        When I Visit the OrangeHRM login page
        And I enter username
        And I enter Password
        And I click on Login button
        Then I verify user is logged in

    Scenario: Login to OrangeHRM - Negative - Custom Paramters
        When I Visit the OrangeHRM login page
        And I enter username
        And I enter invalid Password
        And I click on Login button
        Then I verify user is not logged in