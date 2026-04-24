const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.got('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
