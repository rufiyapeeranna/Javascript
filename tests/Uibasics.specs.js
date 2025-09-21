const { test } = require('@playwright/test');
test('first test', async ({ browser }) => {

    const context = browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

}
);