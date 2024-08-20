const { When, Then } = require('@cucumber/cucumber')
const { LoginPage } = require('../pages/login');
const PageObjects = require('../pages/page-objects');
const pages = new PageObjects()

When('I Visit the OrangeHRM login page', async () => {
    await pages.login.navigate()
});

When('I enter username', async () => {
    await pages.login.enterUsername()
});

When('I enter Password', async () => {
    await pages.login.enterPassword()
})

When('I enter invalid Password', async function () {
    await pages.login.enterPassword("test")
});

When('I click on Login button', async () => {
    await pages.login.clickOnLoginButton()
});

Then('I verify user {isOrIsNot} logged in', async (isLoggedIn) => {
    await pages.dashboard.verifyDashboardisVisible(isLoggedIn)
});