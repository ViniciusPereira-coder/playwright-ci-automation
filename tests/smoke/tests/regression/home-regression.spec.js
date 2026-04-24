const { test, expect } = require('@playwright/test');

test('@regression should validate homepage content and link', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('p')).toContainText('This domain is for use in illustrative examples');
  await expect(page.locator('a')).toHaveAttribute('href', 'https://www.iana.org/domains/example');
});
