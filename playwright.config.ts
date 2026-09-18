import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e/specs",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:5173",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173",
    // Always spawn a fresh server: on Windows `npm run dev` can leave an orphaned
    // vite process holding the port after a previous test.cjs run, silently
    // serving a stale bundle to the next run if reused.
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
