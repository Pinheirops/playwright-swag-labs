// @ts-check
const { test, expect } = require("@playwright/test");

test("login com credenciais validas", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");
  await page.getByPlaceholder("username").fill("standard_user");
  await page.getByPlaceholder("password").fill("secret_sauce");
  await page.locator("#login-button").click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
