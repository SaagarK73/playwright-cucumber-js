const { setWorldConstructor, Before, After, setDefaultTimeout, World } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const PageObjects = require('../pages/page-objects');
const path = require('path');

class CustomWorld extends World{
  constructor(attach) {
    super(attach);
  }

  async setUp() {
    this.browser = await chromium.launch({ headless: true });
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

After(async function (scenario) {
    if (scenario.result.status === 'FAILED') {
        const buffer = await this.page.screenshot({path: `./report/screenshots/${scenario.pickle.name}.png`},)
        this.attach(buffer, { mediaType: 'image/png' });
    }
    await this.tearDown();
});