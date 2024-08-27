const { When } = require('@cucumber/cucumber')

When('I Visit the login page', async function() {
    await this.appPages.login.navigate()
});

When('I enter username', async function() {
    await this.appPages.login.enterUsername()
});

When('I enter Password', async function() {
    await this.appPages.login.enterPassword()
})

When('I enter invalid Password', async function () {
    await this.appPages.login.enterPassword("test")
});

When('I click on Login button', async function() {
    await this.appPages.login.clickOnLoginButton()
});
