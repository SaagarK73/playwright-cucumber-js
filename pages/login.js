const { expect } = require('@playwright/test')
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

class LoginPage {
    async navigate() {
        await global.page.goto(process.env.WEB_URL)
        await global.page.locator(SELECTORS.username).waitFor({ status: 'visible' })
    }

    async enterUsername() {
        await global.page.locator(SELECTORS.username).waitFor({ status: 'visible' })
        await global.page.locator(SELECTORS.username).fill(process.env.WEB_USERNAME)
    }

    async enterPassword(password = process.env.WEB_PASSWORD) {
        await global.page.locator(SELECTORS.password).fill(password)
    }

    async clickOnLoginButton() {
        await global.page.locator(SELECTORS.submit).click()
    }
}
module.exports = { LoginPage }