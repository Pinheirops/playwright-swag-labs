// @ts-check
const {test, expect} = require('@playwright/test');

test('acessar pagina', async ({page}) => {
  await page.goto('https://test-automation-practice.com.br/');
});