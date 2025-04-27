import { test, expect } from '@playwright/test';

function tomorrow(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}
test('should create a move request', async ({ page }) => {
  await page.goto('http://localhost:4200/move');
  await page.fill('#name', 'John Doe');
  await page.fill('#oldAddress', '45 Main St');
  await page.fill('#newAddress', '123 Main St');
  await page.fill('#date', tomorrow());
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Move request successfully created!');
    await dialog.accept();
  });

  await page.click('button[type=submit]');
});
