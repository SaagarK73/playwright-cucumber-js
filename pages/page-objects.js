const LoginPage = require("./login");
const Dashboard = require("./dashboard");

module.exports = class PageObjects {
    constructor(page) {
        this.login = new LoginPage(page);
        this.dashboard = new Dashboard(page);
    }
}