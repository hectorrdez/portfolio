import { expect, test } from "@playwright/test";

test("nav link scrolls its section into view", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Contacto" }).click();
  await expect(page.locator("#contacto")).toBeInViewport();
});

test("brand link scrolls back to the home section", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Contacto" }).click();
  await page
    .getByRole("link", { name: "Héctor Rodríguez Tovar", exact: true })
    .click();
  await expect(page.locator("#home")).toBeInViewport();
});

test("footer exposes real LinkedIn and email links", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: /linkedin/i }),
  ).toHaveAttribute("href", "https://www.linkedin.com/in/hectorrdez/");
  await expect(page.getByRole("link", { name: /email/i })).toHaveAttribute(
    "href",
    "mailto:hectorrdez@gmail.com",
  );
});
