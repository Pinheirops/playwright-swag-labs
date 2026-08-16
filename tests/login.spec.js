// @ts-check
const {test, expect} = require('@playwright/test');

test('acessar sistena', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');
  
  await expect(page).toHaveTitle('Swag Labs');
});