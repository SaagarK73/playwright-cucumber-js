const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('playwright/test');

When('I Visit the login page', async function () {
    await this.appPages.login.navigate()
});

When('I enter username', async function () {
    await this.appPages.login.enterUsername()
});

When('I enter Password', async function () {
    await this.appPages.login.enterPassword()
})

When('I enter invalid Password', async function () {
    await this.appPages.login.enterPassword("test")
});

When('I click on Login button', async function () {
    await this.appPages.login.clickOnLoginButton()
});

Then('an element that does not exist is checked', async function () {
    expect(1).toBe(2);
});
