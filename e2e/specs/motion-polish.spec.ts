import { expect, test } from "@playwright/test";

test("nav highlights the active section while scrolling", async ({ page }) => {
  await page.goto("/");
  await page.locator("#experiencia").scrollIntoViewIfNeeded();
  const experienciaLink = page.getByRole("link", { name: "Experiencia" });
  await expect(experienciaLink).toHaveAttribute("aria-current", "true");
});

test("no horizontal overflow on a mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");
  const hasOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBe(false);
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("sections are visible immediately without scrolling", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator("#sobre-mi .reveal")).toHaveClass(
      /reveal-visible/,
    );
  });
});
