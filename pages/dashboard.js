const { expect } = require('@playwright/test')

const SELECTORS = {
    userDropdown: '.oxd-userdropdown-tab'
}

class Dashboard {
    async verifyDashboardisVisible(isLoggedIn) {
        await expect(global.page.locator(SELECTORS.userDropdown)).toBeAttached({ attached: isLoggedIn })
    }
}

module.exports = { Dashboard }