import { expect, test } from "@playwright/test";

test("background layer is decorative and never blocks pointer events", async ({
  page,
}) => {
  await page.goto("/");
  const bg = page.locator(".bg-decor");
  await expect(bg).toHaveAttribute("aria-hidden", "true");
  await expect(bg).toHaveCSS("pointer-events", "none");
  await expect(bg).toHaveAttribute("data-motion", "reactive");
});

test("scroll updates the parallax CSS variable", async ({ page }) => {
  await page.goto("/");
  const before = await page
    .locator(".bg-decor")
    .evaluate((el) => getComputedStyle(el).getPropertyValue("--scroll-y"));

  await page.mouse.wheel(0, 800);
  await page.waitForTimeout(100);

  const after = await page
    .locator(".bg-decor")
    .evaluate((el) => getComputedStyle(el).getPropertyValue("--scroll-y"));
  expect(after).not.toBe(before);
});

test("mouse movement updates the spotlight position", async ({ page }) => {
  await page.goto("/");
  await page.mouse.move(200, 200);
  await page.waitForTimeout(50);
  await page.mouse.move(600, 400);
  await page.waitForTimeout(100);

  const mx = await page
    .locator(".bg-decor")
    .evaluate((el) => getComputedStyle(el).getPropertyValue("--mx"));
  expect(mx.trim()).toBe("600px");
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("background stays static and ignores scroll/mouse", async ({
    page,
  }) => {
    await page.goto("/");
    const bg = page.locator(".bg-decor");
    await expect(bg).toHaveAttribute("data-motion", "static");

    const before = await bg.evaluate(
      (el) => getComputedStyle(el).getPropertyValue("--scroll-y"),
    );
    await page.mouse.move(300, 300);
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(100);
    const after = await bg.evaluate(
      (el) => getComputedStyle(el).getPropertyValue("--scroll-y"),
    );
    expect(after).toBe(before);
  });
});
