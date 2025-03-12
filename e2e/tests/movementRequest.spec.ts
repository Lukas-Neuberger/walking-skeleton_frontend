import { test, expect } from '@playwright/test';

test('should create a move request', async ({ page }) => {
  await page.goto('http://localhost:4200/move');

  // Formularfelder ausfüllen
  await page.fill('#name', 'John Doe');
  await page.fill('#oldAddress', '45 Main St');
  await page.fill('#newAddress', '123 Main St');
  await page.fill('#date', '2025-04-01');

  // Formular absenden
  await page.click('button[type=submit]');

  // Warten, bis Angular DOM aktualisiert
  await page.waitForTimeout(500);

  // Erfolgsmeldung prüfen
  const successMessage = page.locator('.success-message');
  await expect(successMessage).toBeVisible({ timeout: 5000 });
  await expect(successMessage).toHaveText(/Move request successfully created!/i);
});
