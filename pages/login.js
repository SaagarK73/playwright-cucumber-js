const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../.env'),
});

const SELECTORS = {
    username: '[name="username"]',
    password: '[name="password"]',
    submit: '.orangehrm-login-button',
    userDropdown: '.oxd-userdropdown-tab'
}

module.exports = class LoginPage{
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(process.env.WEB_URL)
        await this.page.locator(SELECTORS.username).waitFor({ status: 'visible' })
    }

    async enterUsername() {
        await this.page.locator(SELECTORS.username).waitFor({ status: 'visible' })
        await this.page.locator(SELECTORS.username).fill(process.env.WEB_USERNAME)
    }

    async enterPassword(password = process.env.WEB_PASSWORD) {
        await this.page.locator(SELECTORS.password).fill(password)
    }

    async clickOnLoginButton() {
        await this.page.locator(SELECTORS.submit).click()
    }
}