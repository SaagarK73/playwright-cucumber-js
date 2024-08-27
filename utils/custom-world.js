const { setWorldConstructor, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const PageObjects = require('../pages/page-objects');

class CustomWorld {
  constructor() {}

  async setUp() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.appPages = new PageObjects(this.page)
  }

  async tearDown() {
    if (this.page)    await this.page.close();
    if (this.context)   await this.context.close();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(10000)

Before(async function () {
  await this.setUp();
});

After(async function () {
  await this.tearDown();
});