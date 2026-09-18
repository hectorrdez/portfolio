import { expect, test } from "@playwright/test";

test("toggles dark mode and persists it across reload", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("html");
  await expect(html).not.toHaveAttribute("data-theme", "dark");

  const toggle = page.getByRole("switch");
  await expect(toggle).toHaveAccessibleName(/modo oscuro/i);
  await toggle.click();
  await expect(html).toHaveAttribute("data-theme", "dark");
  await expect(toggle).toHaveAccessibleName(/modo claro/i);

  await page.reload();
  await expect(html).toHaveAttribute("data-theme", "dark");
});

test("toggle is keyboard operable", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("switch");
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
