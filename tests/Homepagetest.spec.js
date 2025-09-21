const { expect, test } = require('@playwright/test');

test('Getlinks', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    const allLinks = await page.$$('a');
    for (const links of allLinks) {
        const linktext = await links.textContent();
        console.log(linktext);
    }
})