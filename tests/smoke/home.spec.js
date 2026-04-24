const { test, expect } = require('@playwright/test');

test('@smoke should load Example Domain homepage', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Example Domain/);
  await expect(page.locator('h1')).toHaveText('Example Domain');
});
