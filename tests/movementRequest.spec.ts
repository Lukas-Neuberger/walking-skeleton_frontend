import { test, expect } from '@playwright/test';

test('should create a move request', async ({ page }) => {
  await page.goto('http://localhost:4200/create-move-request');

  // Formularfelder ausfüllen
  await page.fill('#name', 'John Doe');
  await page.fill('#address', '123 Main St');
  await page.fill('#date', '2025-04-01');

  // Formular absenden
  await page.click('button[type=submit]');

  // Bestätigung prüfen
  await expect(page.locator('text=Move request successfully created')).toBeVisible();
});
