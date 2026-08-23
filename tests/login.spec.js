// @ts-check
const { test, expect } = require("@playwright/test");

test("login com credenciais validas", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("username").fill("standard_user");
  await page.getByPlaceholder("password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("login com usuario bloqueado", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("username").fill("locked_out_user");
  await page.getByPlaceholder("password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator(".error-message-container")).toHaveText(
    "Epic sadface: Sorry, this user has been locked out.",
  );
});

test("login com credencial invalida", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("username").fill("nome_invalido");
  await page.getByPlaceholder("password").fill("senha_invalida");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator(".error-message-container")).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});

test("login com campo username vazio", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator(".error-message-container")).toHaveText(
    "Epic sadface: Username is required",
  );
});
