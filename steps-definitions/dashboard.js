const { When, Then } = require('@cucumber/cucumber')


Then('I verify user {isOrIsNot} logged in', async function (isLoggedIn) {
  await this.appPages.dashboard.verifyDashboardisVisible(isLoggedIn)
});

When('I click on My Info tab', async () => {
  await this.appPages.dashboard.clickOnMyInfo();
  await this.appPages.dashboard.clickOnSaveCustomFields();
});
