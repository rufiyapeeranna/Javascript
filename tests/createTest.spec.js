const { test, expect } = require('@playwright/test');
test('Home page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');
    const pageTtilr = page.title();
    console.log(pageTtilr);
    await expect(page).toHaveTitle('STORE');

    const pageurl = page.url();
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    console.log(pageurl)
    await page.close();





}


)

