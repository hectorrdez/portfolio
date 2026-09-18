import { expect, test } from "@playwright/test";

test("hero shows name, role and a CTA that scrolls to contact", async ({
  page,
}) => {
  await page.goto("/");

  const hero = page.locator("#home");
  await expect(
    hero.getByRole("heading", { level: 1, name: "Héctor Rodríguez Tovar" }),
  ).toBeVisible();
  await expect(
    hero.getByText("QA Analyst · Test Automation"),
  ).toBeVisible();

  await hero.getByRole("button", { name: "Contactar conmigo" }).click();
  await expect(page.locator("#contacto")).toBeInViewport();
});

test("hero has no fabricated live metrics", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator("#home");
  await expect(hero.getByText(/\d+\s*passed/i)).toHaveCount(0);
  await expect(hero.getByText("100%")).toHaveCount(0);
});
