import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true, // Falls du die UI sehen willst, setze auf false
    baseURL: 'http://localhost:4200',
    browserName: 'chromium', // Alternativ: 'firefox' oder 'webkit'
    viewport: { width: 1280, height: 720 },
  },
});
