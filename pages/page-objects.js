const { Dashboard } = require("./dashboard");
const { LoginPage } = require("./login")

module.exports = class PageObjects {
    constructor() {
        this.login = new LoginPage();
        this.dashboard = new Dashboard();
    }
}