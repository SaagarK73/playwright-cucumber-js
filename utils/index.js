const { Before, AfterAll, setDefaultTimeout, After } = require('@cucumber/cucumber')
const page = require('@playwright/test')

setDefaultTimeout(10000)
Before(async () => {
    let browser = await page.chromium.launch({ headless: false })
    global.browser = browser
    const context = await browser.newContext()
    global.page = await context.newPage()
})

After(async () =>{
    if (this.page)    await this.page.close();
    if (this.context)   await this.context.close();
    await global.browser.close()
})

AfterAll(async () => {
    // await global.browser.close()
})