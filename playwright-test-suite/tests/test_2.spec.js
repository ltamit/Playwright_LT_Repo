const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test('test', async ({ page }) => {
  // Go to https://lambdatest.github.io/sample-todo-app/
  await page.goto('https://lambdatest.github.io/sample-todo-app/');
  // Check input[name="li1"]
  await page.locator('input[name="li1"]').check();
  // Check input[name="li2"]
  await page.locator('input[name="li2"]').check();
  // Check input[name="li3"]
  await page.locator('input[name="li3"]').check();
  // Click [placeholder="Want to add more"]
  await page.locator('[placeholder="Want to add more"]').click();
  // Fill [placeholder="Want to add more"]
  await page.locator('[placeholder="Want to add more"]').fill('Sixth Item');
  // Click text=add
  await page.locator('text=add').click();
  // Click [placeholder="Want to add more"]
  await page.locator('[placeholder="Want to add more"]').click();
  // Fill [placeholder="Want to add more"]
  await page.locator('[placeholder="Want to add more"]').fill('Seventh Item');
  // Click text=add
  await page.locator('text=add').click();
  // Check input[name="li6"]
  await page.locator('input[name="li6"]').check();
});
