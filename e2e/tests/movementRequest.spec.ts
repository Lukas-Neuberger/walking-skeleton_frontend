import { test, expect } from '@playwright/test';

test('should create a move request', async ({ page }) => {
  await page.goto('http://localhost:4200/move');

  // Formularfelder ausfüllen
  await page.fill('#name', 'John Doe');
  await page.fill('#oldAddress', '45 Main St');
  await page.fill('#newAddress', '123 Main St');
  await page.fill('#date', '2025-04-01');

  // Event-Handler für das `alert()`-Popup setzen
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Move request successfully created!');
    await dialog.accept(); // Schließt das Alert-Fenster
  });

  // Formular absenden
  await page.click('button[type=submit]');
});
