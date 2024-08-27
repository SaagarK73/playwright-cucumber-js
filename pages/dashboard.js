const { expect } = require('@playwright/test')

const SELECTORS = {
    userDropdown: '.oxd-userdropdown-tab',
    myInfo: '//span[text()="My Info"]',
    saveCustomFields: '.orangehrm-form-hint + .orangehrm-left-space'
}

module.exports = class Dashboard {
    constructor(page) {
        this.page = page;
    }

    async verifyDashboardisVisible(isLoggedIn) {
        await expect(this.page.locator(SELECTORS.userDropdown)).toBeAttached({ attached: isLoggedIn, timeout: 30000 })
    }

    async clickOnMyInfo() {
        await this.page.locator(SELECTORS.myInfo).click();
    }

    async clickOnSaveCustomFields() {
        await this.page.locator(SELECTORS.saveCustomFields).click();
    }
}